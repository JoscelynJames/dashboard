import { Component } from '@angular/core';

import { GithubService } from '../../services/api/github.service'
@Component({
  selector: 'github-notifications',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  constructor(public github: GithubService) { }
}
