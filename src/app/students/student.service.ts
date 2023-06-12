import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44311';

  constructor(private httpClient:HttpClient) { }

  getStudent() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/students');
  }
}
