import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { GithubComponent } from './github.component';
import { NotificationComponent } from './notification/notification.component'

@NgModule({
  imports: [
    MaterialModule,
    SharedModule
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
