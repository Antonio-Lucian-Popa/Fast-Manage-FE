import { Component, OnInit } from '@angular/core';
import { TypeOfSpending } from 'src/app/shared/enums/typeOfSpending';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
