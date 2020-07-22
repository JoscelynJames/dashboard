import { Component, NgZone, Input } from "@angular/core";
import { AmChartService, Sprite, ChartData } from 'src/app/services/am-chart.service';
import { CovidService } from 'src/app/services/api/covid.service';

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent {
  private chart: Sprite;

  @Input() data: Array<ChartData>

  constructor(
    private zone: NgZone, 
    private chartService: AmChartService, 
    private covidService: CovidService
  ) {
    this.chartService.useDarkTheme()
  }
  
  async ngAfterViewInit() {
    this.zone.runOutsideAngular(async () => {
      this.chart = this.chartService.create("chart-div", this.chartService.XYChart);

      this.chart.data = await this.covidService.getStatsForUnitedStates();

      this.chart.paddingRight = 30;
      this.chart.paddingBottom = 30;
      this.chart.paddingLeft = 10;
      
      const dateAxis = this.chart.xAxes.push(this.chartService.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      this.chart.yAxes.push(this.chartService.ValueAxis());

      const series = this.chart.series.push(this.chartService.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "casesConfirmedOnThisDay";
      series.tooltipText = "{valueY.value}";

      this.chart.cursor = this.chartService.XYCursor();

      const scrollbarX = this.chartService.XYChartScrollbar();
      scrollbarX.series.push(series);
      this.chart.scrollbarX = scrollbarX;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) this.chart.dispose();
    });
  }
}