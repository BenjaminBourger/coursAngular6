import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

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
      map(x => x.toUpperCase()),
      tap(x => console.log('Après map uppercase', x)),
      map(uppercased => this.reverse(uppercased)),
      tap(x => console.log('Apres reverse', x)),
      debounceTime(1000)
    )
    .subscribe(data => console.log(data));
  }

  reverse(word) {
    return word.split('').reverse().join('');
  }

}
