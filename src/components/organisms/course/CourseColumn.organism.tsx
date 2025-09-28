import type { ReactNode } from "react";

import { CourseTabOrganism } from "@/components/organisms/course/CourseTab.organism";
import type { Course } from "@/types/course.types";

type CourseColumnProps = {
  title: string;
  icon: ReactNode;
  courses: Course[];
  bgColor: string;
  count: number;
  emptyStateText: string;
};

export const CourseColumnOrganism = ({
  title,
  icon,
  courses,
  bgColor,
  count,
  emptyStateText,
}: CourseColumnProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className={`${bgColor} rounded-t-xl border-b border-gray-200 p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-semibold text-gray-900">{title}</h3>
          </div>
          <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600">
            {count}
          </span>
        </div>
      </div>
      <div className="min-h-[400px] flex-1 space-y-3 rounded-b-xl bg-gray-50 p-4">
        {courses.map((course) => (
          <CourseTabOrganism
            key={course.id}
            id={course.id}
            name={course.name}
            semester={course.semester}
            status={course.status}
            grade={course.grade}
          />
        ))}
        {courses.length === 0 && (
          <div className="flex h-32 items-center justify-center text-sm text-gray-400">
            {emptyStateText}
          </div>
        )}
      </div>
    </div>
  );
};
