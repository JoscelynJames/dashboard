import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment';

const corsProxyApi = 'https://cors-anywhere.herokuapp.com'
const githubApiUrl = 'https://api.github.com'

@Injectable()
export class GithubService {
  public notifications
  constructor() {
    this.getActivity()
  }

  async getActivity() {
    try {
      const { data } = await axios.get(`${corsProxyApi}/${githubApiUrl}/notifications`, {
        auth: {
          'username': environment.githubUsername,
          'password': environment.githubAPIToken
        }
      })
      
      this.notifications = data
    } catch (err) {
      console.error(err)
    }
  }
}
 
