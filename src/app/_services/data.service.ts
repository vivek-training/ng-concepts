import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  stream$ = new Observable<number>(observer => {
    let counter = 0;
    setInterval(() => {
      observer.next(counter);
      counter++;
    }, 1000);
  });
  constructor() {}
}
