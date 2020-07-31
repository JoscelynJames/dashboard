import { Injectable } from '@angular/core'
import axios from 'axios'
import { environment } from '../../../environments/environment'

@Injectable()
export class CovidService {
  public covidChartData
  private unitedStatesCovidData: Array<UnitedStatesCovidDataPoint>

  constructor() {
    this.setStatsForUnitedStates()
  }

  get getCovidStats(): UnitedStatesCovidDataPoint[] {
    return this.unitedStatesCovidData
  }

  async setStatsForUnitedStates(): Promise<void> {
    try {
      const { data } = await axios.get('https://api.covid19api.com/total/country/united-states')
      this.unitedStatesCovidData = this.formatChartData(data)
    } catch (err) {
      console.error(err)
    }
  }

  formatChartData(data: any): UnitedStatesCovidDataPoint[]  {
    return data.map((dataPoint: any, i) => {
      // get the additional cases for each day
      const casesConfirmedOnThisDay = i === 0
        ? dataPoint.Confirmed
        : dataPoint.Confirmed - data[i - 1].Confirmed

      return ({
        date: new Date(dataPoint.Date),
        name: `data-point-${i}`,
        value: dataPoint.Confirmed,
        casesConfirmedOnThisDay
      } as unknown) as UnitedStatesCovidDataPoint
    })
  }

}

export interface UnitedStatesCovidDataPoint {
  Date: Date
  casesConfirmedOnThisDay: number
  value: string
  name: string
}
