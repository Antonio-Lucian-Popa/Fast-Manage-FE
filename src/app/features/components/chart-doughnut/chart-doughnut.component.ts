import { Component, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent {

  @ViewChild(BaseChartDirective)
  baseChart!: BaseChartDirective;

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
}
