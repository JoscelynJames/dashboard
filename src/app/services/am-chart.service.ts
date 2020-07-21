import { Injectable } from '@angular/core'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_mc from "@amcharts/amcharts4/themes/microchart";

export type Chart = typeof am4charts.XYChart

@Injectable()
export class AmChartService {
  constructor() {}

  get XYChart () {
    return am4charts.XYChart
  }
  
  useDarkTheme() {
    am4core.useTheme(am4themes_dark);
  }

  create(target: string, chartType) {
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
}

