import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();

  // Le dollar par convention pour indiquer que cette variable est un Observable
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;

  constructor() { }

  ngOnInit() {
    this.searchTerms$
    .pipe(
      debounceTime(3000),
      map(x => x.toUpperCase())
    )
    .subscribe(data => console.log(data));
  }

}
