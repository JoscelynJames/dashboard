import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/api/covid.service';

@Component({
  selector: 'covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.scss']
})
export class CovidStatsComponent implements OnInit {
  data

  constructor(private covidService: CovidService) { }

  async ngOnInit() {
    this.data = await this.covidService.getStatsForUnitedStates();
  }

}
