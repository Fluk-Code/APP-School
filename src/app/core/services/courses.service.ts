import { StudentsService } from './students.service';
import { CourseStudents } from './../../shared/models/course-student';
import { Course, Courses } from './../../shared/models/course';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.apiURL;
  }

  save(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiURL}/courses`, course);
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiURL}/courses/${course.id}`, course);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/courses/${id}`);
  }

  list(): Observable<Courses> {
    return this.http.get<Courses>(`${this.apiURL}/courses`);
  }

  findById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiURL}/courses/${id}`);
  }

  findCourseStudents(id: number): Observable<CourseStudents> {
    return this.http.get<CourseStudents>(`${this.apiURL}/courses/${id}/students`);
  }

}
