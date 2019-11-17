import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take, first } from 'rxjs/operators';
@Injectable()
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  getDataOne(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        map((value) => {
          return value;
        })
      )
  }


  getDataTwo(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2')
      .pipe(
        take(1),
        map((value) => {
          return value;
        })
      )
  }

  getDataThree(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/3')
      .pipe(
        first(),
        map((value) => {
          return value;
        })
      )
  }

}