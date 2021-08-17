import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Students } from './../../shared/models/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.apiURL;
  }

  list(): Observable<Students> {
    return this.http.get<Students>(`${this.apiURL}/students`);
  }

}
