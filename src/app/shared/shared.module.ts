import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';

import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component'

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
