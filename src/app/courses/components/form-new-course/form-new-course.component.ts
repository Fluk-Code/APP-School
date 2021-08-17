import { CoursesService } from './../../../core/services/courses.service';
import { Course, Courses } from './../../../shared/models/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-new-course',
  templateUrl: './form-new-course.component.html',
  styleUrls: ['./form-new-course.component.css']
})
export class FormNewCourseComponent implements OnInit {

  courseForm: FormGroup;

  id: number;
  description: string;
  program: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.findById(this.id);
    }else {
      this.createForm();
    }

  }

  submit(): void {
    this.courseForm.markAllAsTouched();
    if(this.courseForm.invalid){
      return;
    };

    const course = this.courseForm.getRawValue() as Course;
    this.save(course);
  }

  delete(): void {
    this.deleteById();
  }

  cleanForm(): void {
    this.courseForm.reset();
  }

  private createForm (): void {
    this.courseForm = this.formBuilder.group({
      description: [this.description, [Validators.required, Validators.maxLength(50)]],
      program: [this.program, [Validators.required]]
    })
  }

  private save({ description, program}: Course): void {

    if (!this.id) {
      const response = this.coursesService.save({ description, program})
        .subscribe( course =>
          {
            this.router.navigate(['courses','register',course.id]);
          },
          error => {
              alert(`
              Status: ${error?.status} \n
              mensagem: ${error?.error?.message}
            `);
          }
        )
    }else {
      const course = {
        id: this.id,
        description,
        program
      }
      const response = this.coursesService.update(course)
        .subscribe( () => {},
      error => {
          alert(`
          Status: ${error?.status} \n
          mensagem: ${error?.error?.message}
        `);
      })
    }


  }

  private deleteById() {
    this.coursesService.deleteById(this.id)
      .subscribe( () => {
          this.router.navigate(['']);
        },
        error => {
            alert(`
            Status: ${error?.status} \n
            mensagem: ${error?.error?.message}
          `);
        })
  }

  private findById(id: number): void {
    this.coursesService.findById(id)
      .subscribe( (course: Course) => {
        this.id = course.id;
        this.description = course.description;
        this.program = course.program;
        this.created_at = course.created_at;
        this.updated_at = course.updated_at;

        this.createForm();
    },
    error => {
        alert(`
        Status: ${error?.status} \n
        mensagem: ${error?.error?.message}
      `);
    })
  }
}
