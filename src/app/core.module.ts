import { NgModule } from '@angular/core';

import { AmChartService } from './services/am-chart.service'
import { CovidService } from './services/api/covid.service'
import { GithubService } from './services/api/github.service'

import  { DashboardModule } from './dashboard/dashboard.module'
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    DashboardModule,
    SharedModule,
  ],
  exports: [
    DashboardModule,
    SharedModule,
  ],
  providers: [ 
    AmChartService,
    CovidService,
    GithubService,
  ],
})

export class CoreModule { }
