import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';

// TODO: move this into another module - maybe a covid specific module? 
import { CovidStatsComponent } from './components/covid-stats/covid-stats.component'

@NgModule({
  declarations: [
    AppComponent,
    CovidStatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
