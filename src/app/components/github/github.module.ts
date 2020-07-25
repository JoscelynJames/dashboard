import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { GithubComponent } from './github.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [SharedModule],
  exports: [
    SharedModule,
    GithubComponent,
  ],
  declarations: [
    GithubComponent,
    NotificationComponent,
  ]
})

export class GithubModule { }
