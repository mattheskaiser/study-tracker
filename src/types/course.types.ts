import type { CourseStatusType } from "@/types/general.types";

export type Course = {
  id: string;
  name: string;
  semester: string;
  status: CourseStatusType;
  grade?: number;
};

export type CoursesByStatus = {
  open: Course[];
  in_progress: Course[];
  done: Course[];
};

export type CoursesBySemester = {
  sem1: Course[];
  sem2: Course[];
  sem3: Course[];
  sem4: Course[];
  sem5: Course[];
  sem6: Course[];
};