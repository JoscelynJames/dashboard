import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment';

const corsProxyApi = 'https://cors-anywhere.herokuapp.com'
const githubApiUrl = 'https://api.github.com'
const apiUrl = `${corsProxyApi}/${githubApiUrl}`

@Injectable()
export class GithubService {
  public notifications
  constructor() {
    this.getActivity()
  }

  async getActivity() {
    try {
      await this.getNotifications()
      await this.getEvents()
    } catch (err) {
      console.error(err)
    }
  }
  
  async getNotifications() {
    const { data } = await axios.get(`${apiUrl}/notifications`, { auth: environment.auth })

    const formattedNotifications = data
      .filter(notification => notification.reason !== 'security_alert')
      .map(async notification => {
        return {
          reason: notification.reason,
          body: notification.subject.title,
          type: notification.subject.type,
          pullRequest: await this.getPullRequest(notification.subject.url)
        }
      })
      
    this.notifications = await Promise.all(formattedNotifications)  
  }

  async getPullRequest(url) {
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

  async getEvents() {
    const { data } = await axios.get(`${apiUrl}/users/JoscelynJames/received_events`, {
      auth: environment.auth
    })
  }
}
 
