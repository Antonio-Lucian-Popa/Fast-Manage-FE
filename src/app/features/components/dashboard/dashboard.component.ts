import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';
import { TypeOfSpending } from 'src/app/shared/enums/typeOfSpending';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  public chartType: ChartType  = 'bar';

  public options: ChartOptions = {
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
        display: false
      }
    }
  };



  spendingsHistory: any[] = [
    {
      type: TypeOfSpending.GAS,
      title: "Gas",
      price: "- 300,14$",
      createdAt: "May 12, 2023 at 8:30 PM"
    },
    {
      type: TypeOfSpending.FOOD,
      title: "Food",
      price: "- 10,39$",
      createdAt: "May 12, 2023 at 10:30 PM"
    },
    {
      type: TypeOfSpending.Car_Stuff,
      title: "Car Stuff",
      price: "- 50,00$",
      createdAt: "May 10, 2023 at 09:14 PM"
    }
  ];

  constructor() {
    // chartLabel push call be
  }

  ngOnInit(): void {
  }

}
