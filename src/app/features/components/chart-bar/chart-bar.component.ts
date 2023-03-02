import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  baseChart!: BaseChartDirective;

  @Input() data: number[] = [];

  public chartLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  public chartData: ChartDataset[] = [
    {
      fill: false,
      data: [],
      backgroundColor: ["#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4", "#1F78B4"]
    }
  ];

  public chartType: ChartType = 'bar';

  public options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          color: '#ffff'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false
      },
      x: {
        display: true,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.chartData[0].data = changes.data.currentValue;
    if(this.baseChart) {
      this.baseChart.update();
    }
  }
}
