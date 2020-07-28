import { NgModule } from '@angular/core'

import { GithubModule } from './github.module'
import { SharedModule } from './shared.module'

import { DashboardComponent } from '../components/dashboard/dashboard.component'
import { CovidStatsComponent } from '../components/covid-stats/covid-stats.component'
import { StatusComponent } from '../components/status/status.component'
import { WeatherComponent } from '../components/weather/weather.component'

@NgModule({
  declarations: [
    CovidStatsComponent,
    DashboardComponent,
    WeatherComponent,
    StatusComponent,
  ],
  imports: [
    GithubModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    GithubModule,
    DashboardComponent,
    CovidStatsComponent,
    StatusComponent,
  ]
})

export class DashboardModule { }
