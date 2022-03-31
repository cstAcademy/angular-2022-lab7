import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElementInterface } from '../PeriodicElementInterface';
import { TableService } from '../table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  periodicElements: PeriodicElementInterface[] = [];

  dataSource = new MatTableDataSource(this.periodicElements);

  constructor(private tableService: TableService) {}

  ngOnInit(): void {}

  getElements() {
    this.periodicElements = this.tableService.getElements();
    this.dataSource = new MatTableDataSource(this.periodicElements);
    console.log(this.periodicElements);
  }

  sortElements() {
    this.periodicElements = this.tableService.sortByWeight();
    this.dataSource = new MatTableDataSource(this.periodicElements);
  }
}
