import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/api/github.service'

@Component({
  selector: 'github-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(public githubService: GithubService) {}

  ngOnInit(): void {
  }

}
