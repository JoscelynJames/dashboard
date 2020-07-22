import { NgModule } from '@angular/core';

import { AmChartService } from './services/am-chart.service'
import { CovidService } from './services/api/covid.service'

@NgModule({
  providers: [ 
    AmChartService,
    CovidService 
  ],
})

export class CoreModule { }
