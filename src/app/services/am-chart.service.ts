import { Injectable } from '@angular/core'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_mc from "@amcharts/amcharts4/themes/microchart";

export interface Chart extends am4charts.XYChart {}
// TODO: Come back to type this correctly
export interface Sprite extends am4core.Sprite {
  data: Array<ChartData>
  xAxes: any
  yAxes: any
  series: any
  cursor: any
  scrollbarX: any
}

export interface ChartData {
  date: Date
  name: string
  value: number 
  casesConfirmedOnThisDay: number
}

@Injectable()
export class AmChartService {
  constructor() {}

  get XYChart () {
    return am4charts.XYChart
  }
  
  useDarkTheme() {
    am4core.useTheme(am4themes_dark);
  }

  create(target: string, chartType): Sprite {
    return am4core.create(target, chartType)
  }

  useMinimalChart() {
    am4core.useTheme(am4themes_mc);
  }

  DateAxis() {
    return new am4charts.DateAxis()
  }

  ValueAxis() {
    return new am4charts.ValueAxis()
  }

  LineSeries() {
    return new am4charts.LineSeries()
  }

  XYCursor() {
    return new am4charts.XYCursor()
  }

  XYChartScrollbar() {
    return new am4charts.XYChartScrollbar()
  }

  CandlestickSeries() {
    return new am4charts.CandlestickSeries()
  }
  
  ColumnSeries() {
    return new am4charts.ColumnSeries()
  }
}

