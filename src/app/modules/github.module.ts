import { NgModule } from '@angular/core'
import { SharedModule } from './shared.module'

import { GithubComponent } from '../components/github/github.component'
import { NotificationComponent } from '../components/github/notification/notification.component'

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
