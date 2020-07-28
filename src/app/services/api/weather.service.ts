import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment'

const apiUrl = `${environment.corsProxyApi}/${environment.darkSkyApi}`

@Injectable()
export class WeatherService {
  private weather: Weather = {
    icon: 'partly-cloudy-day',
    temp: 76,
    precipitationProbability: 15,
    precipitationIntensity: 30,
    windSpeed: 5,
    humidity: .45
  }
  private alerts: Alerts[]

  constructor() {
    this._fetchWeather()
  }

  get getWeather(): Weather {
    return this.weather
  }

  get getAlerts(): Alerts[] {
    return this.alerts
  }

  private async _fetchWeather(): Promise<void> {
    try {
      const { data } = await axios.get(`${apiUrl}/39.801121,-105.081451`)

      this.weather = {
        icon: 'partly-cloudy-day',
        temp: data.currently.temperature,
        precipitationProbability: data.currently.precipProbability,
        precipitationIntensity: data.currently.precipIntensity,
        windSpeed: data.currently.windSpeed,
        humidity: data.currently.humidity
      }
      this.alerts = data.alerts

    } catch (err) {
      console.error(err)
    }
  }
}

interface Weather {
  icon: 'partly-cloudy-day' | 'rain' | 'snow' | 'partly-cloudy-night' | 'clear-day' | 'clear-night' | 'sleet' | 'wind' | 'fog' | 'cloudy'
  temp: number
  precipitationProbability: number
  precipitationIntensity: number
  windSpeed: number
  humidity: number
}

export interface Alerts {
  title: string
}
