import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Observable, Subscription, throwError } from 'rxjs';
import { map, tap, catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  result: number;
  subscriptionObject: Subscription;

  constructor(private dataService: DataService) {
    this.subscriptionObject = dataService.stream$
      .pipe(
        map(v => v * v),
        tap(val => console.log('Tapping to value', val)),
        catchError(err => {
          console.log('Piped Catch Block', err);
          return throwError(new Error('Modified Error'));
        }),
        finalize(() => {
          console.log('Piped finalize block called');
        })
      )
      .subscribe(
        (data: number) => {
          this.result = data;
        },
        error => {
          console.log('ERROR Caught', error);
        },
        () => {
          console.log('Observable completed');
        }
      );
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('Component destroyed');
    this.subscriptionObject.unsubscribe();
  }
}
