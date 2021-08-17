import { Courses } from './../../../shared/models/course';
import { CoursesService } from './../../../core/services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  courses: Courses;

  constructor(
    private coursesservice: CoursesService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    return this.coursesservice.list().subscribe(
      courses => this.courses = courses,
      error => {
        alert(`
        Status: ${error?.status} \n
        mensagem: ${error?.error?.message}
      `);
      }
    );
  }
}
