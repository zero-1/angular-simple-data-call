import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, take, first, catchError, tap } from 'rxjs/operators';
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
        }),
        catchError(this.handleError)
      )
  }


  getDataTwo(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2')
      .pipe(
        take(1),
        map((value) => {
          return value;
        }),
        catchError(this.handleError)
      )
  }

  //manipulating data inline
  getDataThree(): Observable<any[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap((values) => console.log(values)),
        map((values: any[]) => {
          const updatedValues = values.map(value => ({
            ...value,
            website: "Https://" + value.website
          }) as any)
          return updatedValues;
        }),
        tap((input) => console.log(input))
      )
  }


  handleError(err) {
    return throwError('Some error occured');
  }

}