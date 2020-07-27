import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { CoreModule } from './modules/core.module'
import { DashboardModule } from './modules/dashboard.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DashboardModule
  ],
  exports: [CoreModule, DashboardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
