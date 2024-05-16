// import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// instead of any you can add you interface like this
export interface todoRequest {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _http: HttpClient) {}

  // this HttpClient return you a Observable which you can later on use
  // with the help of subscribe and you can subscribe n number of time
  // no like promise who run once.
  public todoData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this._http.get(url);
  }
}
