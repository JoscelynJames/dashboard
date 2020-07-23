import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() name: string
  @Input() icon: string
  @Input() body: string
  @Input() timestamp: string

  constructor() { }
}
