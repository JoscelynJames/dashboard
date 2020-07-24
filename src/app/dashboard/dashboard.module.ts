import { NgModule } from '@angular/core';

import { GithubModule } from '../components/github/github.module';
import { SharedModule } from '../shared/shared.module';

import { CovidStatsComponent } from '../components/covid-stats/covid-stats.component'
import  { DashboardComponent } from '../dashboard/dashboard.component'

@NgModule({
  declarations: [
    CovidStatsComponent,
    DashboardComponent,
  ],
  imports: [
    GithubModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    DashboardComponent,
    CovidStatsComponent, 
    GithubModule,
  ]
})

export class DashboardModule { }
