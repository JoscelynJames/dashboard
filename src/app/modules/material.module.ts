import { NgModule } from '@angular/core'

import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
  ]
})
export class MaterialModule { }
