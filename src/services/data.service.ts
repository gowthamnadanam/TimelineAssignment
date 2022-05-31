import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Grade } from 'src/models/grades';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gridDataSource: BehaviorSubject<Array<Grade>> = new BehaviorSubject<Array<Grade>>([]);
  gridData: Observable<Array<Grade>> = this.gridDataSource.asObservable();
 
  constructor() { }
 
  sendData(gridData: Array<Grade>) {
    this.gridDataSource.next(gridData);
  }
}