import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';

import { Grade } from '../models/grades';
import { MessageService } from './message.service';
import { appConfig } from 'src/config/appConfig';


@Injectable({ providedIn: 'root' })
export class TimelineService {

  private timelineUrl = appConfig.rooturl;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getTimeline(): Observable<Grade[]> {
  //   return this.http.get<Grade[]>(this.timelineUrl +'/grades')
  //     .pipe(
  //       tap(_ => this.log('fetched timeline')),
  //       catchError(this.handleError<Grade[]>('getTimeline', []))
  //     );
  // }

  public getTimeline(){ 
    debugger;
    return this.http.get(this.timelineUrl + '/grades');
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TimelineService: ${message}`);
  }
}


