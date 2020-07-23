import { NgModule } from '@angular/core';

import { AmChartService } from './services/am-chart.service'
import { CovidService } from './services/api/covid.service'
import { GithubService } from './services/api/github.service'

@NgModule({
  providers: [ 
    AmChartService,
    CovidService,
    GithubService
  ],
})

export class CoreModule { }
