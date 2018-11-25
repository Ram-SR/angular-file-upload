import { Component, OnInit, Input } from '@angular/core';
import { lineChartConfig } from '../../constants/lineChartConfig';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() chartData;
  chartConfig = {};
  
  constructor() { }

  ngOnInit() {
    this.chartConfig = lineChartConfig;
  }

}
