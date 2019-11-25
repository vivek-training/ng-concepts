import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  compStream$: Observable<number>;
  constructor(private dataService: DataService) {
    this.compStream$ = dataService.stream$.pipe(map(v => v * v));
  }

  ngOnInit() {}
}
