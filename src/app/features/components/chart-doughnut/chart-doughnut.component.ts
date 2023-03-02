import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  baseChart!: BaseChartDirective;

  @Input() data: any[] = [];

  public chartLabels: string[] = ["Expenses", "Profit"];

  public chartData: ChartDataset[] = [
    {
      fill: false,
      data: [40, 60],
      backgroundColor: ["#A6CEE3", "#1F78B4"]
    }
  ];

  public chartType: ChartType = 'doughnut';

  public options: any = {
    pieceLabel: {
      render: function (args: any) {
        return args.value;
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
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
        display: false,
      }
    }
  };

  constructor() {}

  ngOnInit(): void {
    this.chartData[0].data = this.data;
  }

  ngOnChanges(changes: any) {
    this.chartData[0].data = changes.data.currentValue;
    if(this.baseChart) {
      this.baseChart.update();
    }
  }
}
