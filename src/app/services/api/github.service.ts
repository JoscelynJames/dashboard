import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment'

const corsProxyApi = 'https://cors-anywhere.herokuapp.com'
const githubApiUrl = 'https://api.github.com'
const apiUrl = `${corsProxyApi}/${githubApiUrl}`

@Injectable()
export class GithubService {
  private notifications: Notification[]
  private status: string
  private events: Event[]

  constructor() {
    this._getActivity()
    this._fetchStatus()
  }

  get getStatus(): string {
    return this.status
  }

  get getNotifications(): Notification[] {
    return this.notifications
  }

  get getEvents(): Event[] {
    return this.events
  }

  private async _getActivity(): Promise<void> {
    try {
      await this._getNotifications()
      await this._fetchEvents()
    } catch (err) {
      console.error(err)
    }
  }

  private async _getNotifications(): Promise<void> {
    const { data } = await axios.get(`${apiUrl}/notifications`, { auth: environment.auth })

    const formattedNotifications = data
      .filter(notification => notification.reason !== 'security_alert')
      .map(async notification => {
        return {
          reason: notification.reason,
          body: notification.subject.title,
          type: notification.subject.type,
          pullRequest: await this._getPullRequest(notification.subject.url)
        }
      })

    this.notifications = await Promise.all(formattedNotifications)
  }

  private async _getPullRequest(url): Promise<PullRequestData> {
    try {
      // the url we get already has githubs api url. we only need the cors proxy
      const { data } = await axios.get(`${corsProxyApi}/${url}`, { auth: environment.auth })

      return {
        opened: data.created_at,
        link: data.html_url,
        status: data.state,
        assignee: data.assignee.login
      }
    } catch (err) {
      console.error(err)
    }
  }

  private async _fetchEvents(): Promise<void> {
    const { data } = await axios.get(`${apiUrl}/users/JoscelynJames/received_events`, {
      auth: environment.auth
    })

    this.events = data.map(event => {
      return {
        actor: event.actor.login,
        type: event.type,
        repoName: event.repo.name,
        repoUrl: event.repo.url,
        action: event.payload.action
      }
    })
  }

  private async _fetchStatus(): Promise<void> {
    const resp = await axios.get('https://kctbh9vrtdwd.statuspage.io/api/v2/status.json')

    this.status = resp.data.status.description
  }
}

interface Notification {
  reason: string
  body: string
  type: string
  pullRequest: PullRequestData | Promise<PullRequestData>
}

interface PullRequestData {
  opened: string
  link: string
  status: string
  assignee: string
}

interface Event {
  actor: string
  type: string
  repoName: string
  repoUrl: string
  action: string
}