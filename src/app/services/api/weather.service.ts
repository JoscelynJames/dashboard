import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment'

const apiUrl = `${environment.corsProxyApi}/${environment.darkSkyApi}`

@Injectable()
export class WeatherService {
  private weather: Weather

  constructor() {
    this._fetchWeather()
  }

  get getWeather(): Weather {
    return this.weather
  }

  private async _fetchWeather(): Promise<void> {
    try {
      const { alerts, currently } = await axios.get(`${apiUrl}/39.801121,-105.081451`)
      this.weather = {
        alerts,
        icon: currently.icon,
        temp: currently.temperature,
        precipitationProbability: currently.precipProbability,
        precipitationIntensity: currently.precipIntensity,
        windSpeed: currently.windSpeed,
        humidity: currently.humidity
      }
    } catch (err) {
      console.error(err)
    }
  }
}

interface Weather {
  alerts: Alerts[]
  icon: Icons
  temp: string
  precipitationProbability: number
  precipitationIntensity: number
  windSpeed: number
  humidity: number
}

interface Alerts {
  title: string
}

enum Icons {
  'partly-cloudy-day', 'rain', 'snow', 'partly-cloudy-night', 'clear-day', 'clear-night', 'sleet', 'wind', 'fog', 'cloudy'
}