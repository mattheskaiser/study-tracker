export type CourseStatusType = "open" | "in_progress" | "done";

export type CourseType = {
  grade?: number;
  id: string;
  name: string;
  semester: string;
  status: CourseStatusType;
  userId: string;
};

export type CoursesType = {
  courses: CourseType[];
};
