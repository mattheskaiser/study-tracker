import { useMemo } from "react";
import { BookOpen, Clock, GraduationCap } from "lucide-react";

import { TextAtom } from "@/components/atoms/Text.atom";
import { LoadingSpinnerMolecule } from "@/components/molecules/LoadingSpinner.molecule";
import { CourseTabOrganism } from "@/components/organisms/CourseTab.organism";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";
import type { CourseStatusType } from "@/types/general.types";

type KanbanColumnProps = {
  title: string;
  icon: React.ReactNode;
  courses: any[];
  bgColor: string;
  count: number;
};

const KanbanColumn = ({ title, icon, courses, bgColor, count }: KanbanColumnProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className={`${bgColor} rounded-t-xl p-4 border-b border-gray-200`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-semibold text-gray-900">{title}</h3>
          </div>
          <span className="bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-600">
            {count}
          </span>
        </div>
      </div>
      <div className="flex-1 p-4 bg-gray-50 rounded-b-xl space-y-3 min-h-[400px]">
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
          <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
            No courses
          </div>
        )}
      </div>
    </div>
  );
};

export const CourseListOrganism = () => {
  const translation = useTranslation();
  const { isPending, error, courses } = useCourses();

  const coursesByStatus = useMemo(() => {
    const grouped = {
      open: courses.filter(course => course.status === 'open'),
      in_progress: courses.filter(course => course.status === 'in_progress'),
      done: courses.filter(course => course.status === 'done'),
    };
    return grouped;
  }, [courses]);

  if (isPending) {
    return (
      <div className="mt-6 flex w-full justify-center">
        <LoadingSpinnerMolecule color="black" />
      </div>
    );
  }

  if (error) {
    return (
      <TextAtom size="small" color="error">
        {translation.courseManagerCard.courseListOrganism.errorMessage}
      </TextAtom>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <TextAtom size="small" color="warning">
          {translation.courseManagerCard.courseListOrganism.noCoursesAddedNote}
        </TextAtom>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Course Board ({courses.length} total)
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <KanbanColumn
          title={translation.courseManagerCard.courseListOrganism.courseTabOrganism.courseStatusOpen}
          icon={<BookOpen className="h-4 w-4 text-blue-600" />}
          courses={coursesByStatus.open}
          bgColor="bg-blue-50"
          count={coursesByStatus.open.length}
        />
        <KanbanColumn
          title={translation.courseManagerCard.courseListOrganism.courseTabOrganism.courseStatusInProgress}
          icon={<Clock className="h-4 w-4 text-yellow-600" />}
          courses={coursesByStatus.in_progress}
          bgColor="bg-yellow-50"
          count={coursesByStatus.in_progress.length}
        />
        <KanbanColumn
          title={translation.courseManagerCard.courseListOrganism.courseTabOrganism.courseStatusDone}
          icon={<GraduationCap className="h-4 w-4 text-green-600" />}
          courses={coursesByStatus.done}
          bgColor="bg-green-50"
          count={coursesByStatus.done.length}
        />
      </div>
    </div>
  );
};
