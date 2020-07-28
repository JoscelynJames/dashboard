import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from './material.module'

import { CardComponent } from '../shared/card/card.component'
import { ChartComponent } from '../shared/chart/chart.component'

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [
    CardComponent,
    ChartComponent,
  ],
  exports: [
    MaterialModule,
    CardComponent,
    ChartComponent,
    CommonModule,
  ]
})

export class SharedModule { }
