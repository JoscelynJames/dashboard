import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment';

@Injectable()
export class CovidService {
  public covidChartData
  private unitedStatesCovidData: Array<UnitedStatesCovidDataPoint>

  constructor() {}

  async getStatsForUnitedStates() {
    try {
      if (!environment.production) return this.fakeData()

      const { data } = await axios.get('https://api.covid19api.com/total/country/united-states')
      this.unitedStatesCovidData = data

      return this.formatChartData()
    } catch (err) {
      console.error(err)
    }
  }

  formatChartData() {
    return this.unitedStatesCovidData.map((dataPoint, i) => {
      const casesConfirmedOnThisDay = i === 0 
        ? dataPoint.Confirmed
        : dataPoint.Confirmed - this.unitedStatesCovidData[i - 1].Confirmed

      return {
        date: new Date(dataPoint.Date),
        name: `data-point-${i}`,
        value: dataPoint.Confirmed,
        casesConfirmedOnThisDay
      }
    })
  }

  fakeData() {
    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, casesConfirmedOnThisDay: visits, value: visits });
    }
    return data 
  }
}


interface UnitedStatesCovidDataPoint {
  Date: Date
  Confirmed: number
}