import { Component, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent {

  @ViewChild(BaseChartDirective)
  baseChart!: BaseChartDirective;

  public chartLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  public chartData: ChartDataset[] = [
    {
      fill: false,
      data: [30, 10, 50, 76, 32, 11, 98, 23, 45, 87, 73, 90],
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
}
