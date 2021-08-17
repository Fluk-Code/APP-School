export interface Course {
  id?: number,
  description: string,
  program: string,
  created_at?: Date,
  updated_at?: Date
}


export type Courses = Array<Course>
