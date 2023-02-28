import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ChartBarComponent } from '../chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from '../chart-doughnut/chart-doughnut.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartBarComponent,
    ChartDoughnutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatDividerModule,
    NgChartsModule,
    MatButtonToggleModule,
  ]
})
export class DashboardModule { }
