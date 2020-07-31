import { Component, NgZone, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core'
import { AmChartService, Sprite, ChartData } from 'src/app/services/am-chart.service'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnChanges, OnDestroy, AfterViewInit {
  private chart: Sprite

  @Input() data: Array<ChartData>
  // TODO: break this into two separate components by theme
  // Data should be shown more different due to data layout
  @Input() theme: 'dark' | 'minimal'

  constructor(
    private zone: NgZone,
    private chartService: AmChartService,
  ) {}

  ngOnChanges(changes): void {
    // TODO: this checks if data input has changed. We could go even further and check if the data objects have changed
    if (changes.data && this.chart) this.chart.data = this.data
  }

  async ngAfterViewInit(): Promise<void> {
    this.zone.runOutsideAngular(async () => {
      if (this.theme === 'dark') this.chartService.useDarkTheme()
      if (this.theme === 'minimal') this.chartService.useMinimalChart()

      this.chart = this.chartService.create('chart-div', this.chartService.XYChart)
      // general styling to the chart
      this.chart.paddingRight = 30
      this.chart.paddingBottom = 30
      this.chart.paddingLeft = 10
      // Set up x axis
      const dateAxis = this.chart.xAxes.push(this.chartService.DateAxis())
      dateAxis.renderer.grid.template.location = 0

      // Set up the Y axis data - this will be the date
      this.chart.yAxes.push(this.chartService.ValueAxis())
      const series = this.chart.series.push(this.chartService.LineSeries())
      // assign values to x and y axis
      series.dataFields.dateX = 'date'
      series.dataFields.valueY = 'casesConfirmedOnThisDay'
      // adds the tip and assigns value
      series.tooltipText = '{valueY.value}'
      // enable cross cursor
      this.chart.cursor = this.chartService.XYCursor()
      // Minimal does not allow for the date scroll bar
      if (this.theme !== 'minimal') {
        const scrollbarX = this.chartService.XYChartScrollbar()
        scrollbarX.series.push(series)
        this.chart.scrollbarX = scrollbarX
      }
    })
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) this.chart.dispose()
    })
  }
}
