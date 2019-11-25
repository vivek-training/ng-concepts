import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  stream$ = new Observable<number>(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.error(new Error('Observer errors here!'));
    observer.complete();
  });
  constructor() {}
}
