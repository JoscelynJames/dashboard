import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import {MatCardModule} from '@angular/material/card';

import { CardComponent } from './card/card.component';

@NgModule({
  imports: [ MaterialModule ],
  declarations: [
    CardComponent,
  ],
  exports: [ 
    CardComponent
  ]
})
export class SharedModule { }
