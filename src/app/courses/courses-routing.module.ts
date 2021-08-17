import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { FormNewCourseComponent } from './components/form-new-course/form-new-course.component';
import { CoursesComponent } from './courses.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ListCoursesComponent
  },
  {
    path: 'register',
    children: [
      {
        path: '',
        component: FormNewCourseComponent
      },
      {
        path: ':id',
        children: [
          {
            path:'',
            component: FormNewCourseComponent
          },
          {
            path:'students',
            component: ListStudentsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
