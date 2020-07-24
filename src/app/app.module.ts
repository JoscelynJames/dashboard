import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { GithubModule } from './components/github/github.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// TODO: move this into another module - maybe a covid specific module? 
import { CovidStatsComponent } from './components/covid-stats/covid-stats.component'

@NgModule({
  declarations: [
    AppComponent,
    CovidStatsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    CoreModule,
    GithubModule
  ],
  providers: [],
  bootstrap: [AppComponent, DashboardComponent]
})

export class AppModule { }
