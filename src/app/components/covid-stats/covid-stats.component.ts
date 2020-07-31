import { Component } from '@angular/core'
import { CovidService } from '../../services/api/covid.service'
@Component({
  selector: 'covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.scss']
})

export class CovidStatsComponent {
  constructor(public covidService: CovidService) { }
}
