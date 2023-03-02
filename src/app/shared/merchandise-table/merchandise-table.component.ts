import { MerchandiseService } from './../services/merchandise.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Merchandise } from '../interface/merchandise';

@Component({
  selector: 'app-merchandise-table',
  templateUrl: './merchandise-table.component.html',
  styleUrls: ['./merchandise-table.component.scss']
})
export class MerchandiseTableComponent implements OnInit {

  private sort!: MatSort;
  displayedColumns: string[] = ['position', 'sender', 'consignee', 'loading_location', 'download_location', 'price', 'kg', 'status', 'detail'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  setDataSourceAttributes() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  data: Merchandise[] = [];

  constructor(private merchandiseService: MerchandiseService) { }

  ngOnInit(): void {
    this.merchandiseService.getMerchandise("1").subscribe(merchandises => {
      this.data = merchandises;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  checkStatusColor(status: string): string {
    if(status.includes("De Incarcat")) {
      return "red";
    } else {
      return "green";
    }
  }

}
