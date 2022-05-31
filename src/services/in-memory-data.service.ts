import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const grades = [
      {
        "id": 0,
        "studentName": "Bob",
        "subjectName": "Sub1",
        "grade": "6th grade",
        "score": "AA"
      },
      {
        "id": 1,
        "studentName": "Bob",
        "subjectName": "Sub2",
        "grade": "7th grade",
        "score": "AB"
      },
      {
        "id": 2,
        "studentName": "Bob",
        "subjectName": "Sub3",
        "grade": "8th grade",
        "score": "AC"
      },
      {
        "id": 3,
        "studentName": "Bob",
        "subjectName": "Sub1",
        "grade": "6th grade",
        "score": "AD"
      },
      {
        "id": 4,
        "studentName": "Bob",
        "subjectName": "Sub2",
        "grade": "7th grade",
        "score": "AE"
      },
      {
        "id": 5,
        "studentName": "Bob",
        "subjectName": "Sub3",
        "grade": "8th grade",
        "score": "AF"
      },
      {
        "id": 6,
        "studentName": "Bob",
        "subjectName": "Sub4",
        "grade": "9th grade",
        "score": "AG"
      },
      {
        "id": 7,
        "studentName": "Bob",
        "subjectName": "Sub5",
        "grade": "10th grade",
        "score": "AH"
      },
      {
        "id": 8,
        "studentName": "Bob",
        "subjectName": "Sub1",
        "grade": "9th grade",
        "score": "AI"
      },
      {
        "id": 9,
        "studentName": "Bob",
        "subjectName": "Sub2",
        "grade": "8th grade",
        "score": "AJ"
      },
      {
        "id": 10,
        "studentName": "Bob",
        "subjectName": "Sub3",
        "grade": "7th grade",
        "score": "AK"
      },
      {
        "id": 11,
        "studentName": "Bob",
        "subjectName": "Sub4",
        "grade": "9th grade",
        "score": "AL"
      },
      {
        "id": 12,
        "studentName": "Bob",
        "subjectName": "Sub5",
        "grade": "10th grade",
        "score": "AM"
      }
    ];
    return {grades};
  }

}
