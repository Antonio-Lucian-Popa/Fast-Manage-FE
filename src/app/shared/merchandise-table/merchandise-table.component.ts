import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-merchandise-table',
  templateUrl: './merchandise-table.component.html',
  styleUrls: ['./merchandise-table.component.scss']
})
export class MerchandiseTableComponent {

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
    if(this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  data: any[] = [
    { position: 1,
      sender: 'Step Tap',
      consignee: 'Geoghe Andrei',
      loading_location: 'Cluj, Romania',
      download_location: 'Bucuresti, Romania',
      price: '500 Ron',
      kg: '500',
      status: 'Incarcat'
    },
    { position: 2,
      sender: 'Step Tap',
      consignee: 'Geoghe Andrei',
      loading_location: 'Cluj, Romania',
      download_location: 'Bucuresti, Romania',
      price: '500 Ron',
      kg: '500',
      status: 'Incarcat'
    }
  ];

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
