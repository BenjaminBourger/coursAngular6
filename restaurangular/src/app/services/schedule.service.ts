import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) { }

  search(term): Observable<object> {
    return this.httpClient.get('assets/schedules.json')
                          .pipe(
                            // tslint:disable-next-line:no-string-literal
                            map(res => res['events'].filter(evt => evt.title.indexOf(term) > -1)),
                            tap(filteredEvents => console.log('FilteredEvents : ', filteredEvents))
                          );
  }
}
