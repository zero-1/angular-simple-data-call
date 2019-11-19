import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  constructor(
    private dataService: DataService
  ) { }

  dataProvider1$: Observable<any>;
  dataProvider2: Array<any>;
  dataProvider3: Array<any>;

  subs: Subscription;

  ngOnInit() {
    this.dataProvider1$ = this.dataService.getDataOne();

    this.subs = this.dataService.getDataTwo()
      .subscribe((value) => {
        this.dataProvider2 = value;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}