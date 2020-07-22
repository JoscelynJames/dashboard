import { Injectable } from '@angular/core'
import axios from 'axios'

@Injectable()
export class CovidService {
  public covidChartData
  private unitedStatesCovidData: Array<UnitedStatesCovidDataPoint>

  constructor() {}

  async getStatsForUnitedStates() {
    try {
      const { data } = await axios.get('https://api.covid19api.com/total/country/united-states')
  
      this.unitedStatesCovidData = data
      console.log(this.unitedStatesCovidData)
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
}

interface UnitedStatesCovidDataPoint {
  Date: Date
  Confirmed: number
}