export interface Student {
  id?: number,
  name: string,
  created_at?: Date,
  updated_at?: Date
}

export type Students = Array<Student>
