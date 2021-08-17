import { HeaderLiteComponent } from './../shared/components/header-lite/header-lite.component';
import { CardModule } from './../shared/components/card/card.module';
import { MessageInputModule } from './../shared/components/message-input/message-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormNewCourseComponent } from './components/form-new-course/form-new-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';

@NgModule({
  declarations: [
    CoursesComponent,
    HeaderComponent,
    HeaderLiteComponent,
    ToolbarComponent,
    FormNewCourseComponent,
    ListCoursesComponent,
    ListStudentsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    MessageInputModule,
    CardModule
  ]
})
export class CoursesModule { }
