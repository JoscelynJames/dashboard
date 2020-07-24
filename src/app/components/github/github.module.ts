import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { GithubComponent } from './github.component';
import { NotificationComponent } from './notification/notification.component'

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule
  ],
  exports: [  
    GithubComponent
  ],
  declarations: [
    GithubComponent,
    NotificationComponent
  ]
})

export class GithubModule { }
