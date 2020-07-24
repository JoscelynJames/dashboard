import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [ 
    MatCardModule, 
    MatListModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
