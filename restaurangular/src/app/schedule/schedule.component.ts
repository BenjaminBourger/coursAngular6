import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  result = null;

  // Le dollar par convention pour indiquer que cette variable est un Observable
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.searchTerms$
    .pipe(
      debounceTime(1000),
      map(word => this.scheduleService.search(word))
    )
    .subscribe(data => this.result = data);
  }

  reverse(word) {
    return word.split('').reverse().join('');
  }

}
