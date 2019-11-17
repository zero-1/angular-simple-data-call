import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  dataProvider1$: Observable<any>;
  dataProvider2: Array<any>;
  dataProvider3: Array<any>;

  ngOnInit() {
    this.dataProvider1$ = this.dataService.getDataOne();

    this.dataService.getDataTwo()
      .subscribe((value) => {
        this.dataProvider2 = value;
      });
  }

}