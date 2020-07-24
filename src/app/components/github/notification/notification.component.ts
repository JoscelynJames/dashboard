import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() name: string
  @Input() icon: string = 'comments'
  @Input() body: string
  @Input() timestamp: string
  @Input() reason: string
  @Input() link: string
  @Input() status: string = 'open'

  constructor() {}
}
