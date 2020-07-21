import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component'

@NgModule({
  imports: [ MaterialModule ],
  declarations: [
    CardComponent,
    ChartComponent
  ],
  exports: [ 
    CardComponent,
    ChartComponent
  ]
})

export class SharedModule { }
