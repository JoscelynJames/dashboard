import { NgModule } from '@angular/core';

import { GithubModule } from './github.module';
import { SharedModule } from './shared.module';

import { CovidStatsComponent } from '../components/covid-stats/covid-stats.component'
import { StatusComponent } from '../components/status/status.component'
import { DashboardComponent } from '../dashboard/dashboard.component'

@NgModule({
  declarations: [
    CovidStatsComponent,
    DashboardComponent,
    StatusComponent
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
