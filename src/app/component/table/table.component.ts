import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Observable, Subscription, EMPTY} from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  dataProvider3$: Observable<any[]>;

  subs: Subscription;

  ngOnInit() {
    this.dataProvider1$ = this.dataService.getDataOne();

    // with error handling 
/*
    this.dataProvider1$ = this.dataService.getDataOne().pipe(
      catchError((err) => {
        return EMPTY;
      })
    )
*/

this.dataProvider3$ = this.dataService.getDataThree();

    this.subs = this.dataService.getDataTwo()
      .subscribe(
        (value) => {
          this.dataProvider2 = value;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}