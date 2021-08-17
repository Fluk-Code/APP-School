import { Students } from './../../../shared/models/student';
import { CoursesService } from './../../../core/services/courses.service';
import { CourseStudents } from './../../../shared/models/course-student';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  id_course: number
  enrollments: CourseStudents;
  students: Students;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.id_course = this.activatedRoute.snapshot.params['id']
    this.listEntrollments();
  }

  listEntrollments() {
    this.coursesService.findCourseStudents(this.id_course)
      .subscribe(
        enrollments => this.enrollments = enrollments,
        error => {
          alert(`
          Status: ${error?.status} \n
          mensagem: ${error?.error?.message}
        `);
        }
      )
  }

}
