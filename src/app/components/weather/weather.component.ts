import { Component, OnInit } from '@angular/core'
import { WeatherService, Alerts } from '../../services/api/weather.service'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public alerts: Alerts
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
