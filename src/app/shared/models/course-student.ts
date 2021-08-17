import { Student } from './student';

export interface CourseStudent {
  id_course: number,
  id_student: number,
  created_at?: Date,
  updated_at?: Date,
  student: Student
}


export type CourseStudents = Array<CourseStudent>
