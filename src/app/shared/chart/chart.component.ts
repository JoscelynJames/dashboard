import { Component, NgZone, Input } from "@angular/core";
import { AmChartService } from 'src/app/services/am-chart.service';

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent {
  private chart: any;

  @Input() data: Array<{date: Date; name: string; value: number}> // come back to type this

  constructor(private zone: NgZone, private chartService: AmChartService) {
    this.chartService.useDarkTheme()
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.chart = this.chartService.create("chart-div", this.chartService.XYChart);

      this.chart.paddingRight = 30;
      this.chart.paddingBottom = 30;
      this.chart.paddingLeft = 10;

      this.chart.data = this.data;

      const dateAxis = this.chart.xAxes.push(this.chartService.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      this.chart.yAxes.push(this.chartService.ValueAxis());

      const series = this.chart.series.push(this.chartService.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
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