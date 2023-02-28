import { MerchandiseTableComponent } from './../../../shared/merchandise-table/merchandise-table.component';
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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartBarComponent,
    ChartDoughnutComponent,
    MerchandiseTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatDividerModule,
    NgChartsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DashboardModule { }
