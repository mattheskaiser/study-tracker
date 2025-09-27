import { useMemo, useState } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  LayoutGrid,
} from "lucide-react";

import { TextAtom } from "@/components/atoms/Text.atom";
import { LoadingSpinnerMolecule } from "@/components/molecules/LoadingSpinner.molecule";
import { CourseTabOrganism } from "@/components/organisms/CourseTab.organism";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

type ViewColumnProps = {
  title: string;
  icon: React.ReactNode;
  courses: any[];
  bgColor: string;
  count: number;
  emptyStateText: string;
};

const ViewColumn = ({
  title,
  icon,
  courses,
  bgColor,
  count,
  emptyStateText,
}: ViewColumnProps) => {
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

type ViewTabProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

const ViewTab = ({ active, onClick, icon, label }: ViewTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors duration-200 ${
        active
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export const CourseListOrganism = () => {
  const translation = useTranslation();
  const { isPending, error, courses } = useCourses();
  const [activeView, setActiveView] = useState<"status" | "semester">("status");

  const coursesByStatus = useMemo(() => {
    const grouped = {
      open: courses.filter((course) => course.status === "open"),
      in_progress: courses.filter((course) => course.status === "in_progress"),
      done: courses.filter((course) => course.status === "done"),
    };
    return grouped;
  }, [courses]);

  const coursesBySemester = useMemo(() => {
    const grouped = {
      sem1: courses.filter((course) => course.semester === "sem1"),
      sem2: courses.filter((course) => course.semester === "sem2"),
      sem3: courses.filter((course) => course.semester === "sem3"),
      sem4: courses.filter((course) => course.semester === "sem4"),
      sem5: courses.filter((course) => course.semester === "sem5"),
      sem6: courses.filter((course) => course.semester === "sem6"),
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
      <div className="py-12 text-center">
        <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-400" />
        <TextAtom size="small" color="warning">
          {translation.courseManagerCard.courseListOrganism.noCoursesAddedNote}
        </TextAtom>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <ViewTab
            active={activeView === "status"}
            onClick={() => setActiveView("status")}
            icon={<LayoutGrid className="h-4 w-4" />}
            label={
              translation.courseManagerCard.courseListOrganism.viewTabs.status
            }
          />
          <ViewTab
            active={activeView === "semester"}
            onClick={() => setActiveView("semester")}
            icon={<Calendar className="h-4 w-4" />}
            label={
              translation.courseManagerCard.courseListOrganism.viewTabs.semester
            }
          />
        </div>
      </div>

      {activeView === "status" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.courseTabOrganism
                .courseStatusOpen
            }
            icon={<BookOpen className="h-4 w-4 text-blue-600" />}
            courses={coursesByStatus.open}
            bgColor="bg-blue-50"
            count={coursesByStatus.open.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.courseTabOrganism
                .courseStatusInProgress
            }
            icon={<Clock className="h-4 w-4 text-yellow-600" />}
            courses={coursesByStatus.in_progress}
            bgColor="bg-yellow-50"
            count={coursesByStatus.in_progress.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.courseTabOrganism
                .courseStatusDone
            }
            icon={<GraduationCap className="h-4 w-4 text-green-600" />}
            courses={coursesByStatus.done}
            bgColor="bg-green-50"
            count={coursesByStatus.done.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.semesterLabels
                .sem1
            }
            icon={<Calendar className="h-4 w-4 text-purple-600" />}
            courses={coursesBySemester.sem1}
            bgColor="bg-purple-50"
            count={coursesBySemester.sem1.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.semesterLabels
                .sem2
            }
            icon={<Calendar className="h-4 w-4 text-indigo-600" />}
            courses={coursesBySemester.sem2}
            bgColor="bg-indigo-50"
            count={coursesBySemester.sem2.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.semesterLabels
                .sem3
            }
            icon={<Calendar className="h-4 w-4 text-blue-600" />}
            courses={coursesBySemester.sem3}
            bgColor="bg-blue-50"
            count={coursesBySemester.sem3.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.semesterLabels
                .sem4
            }
            icon={<Calendar className="h-4 w-4 text-green-600" />}
            courses={coursesBySemester.sem4}
            bgColor="bg-green-50"
            count={coursesBySemester.sem4.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.semesterLabels
                .sem5
            }
            icon={<Calendar className="h-4 w-4 text-yellow-600" />}
            courses={coursesBySemester.sem5}
            bgColor="bg-yellow-50"
            count={coursesBySemester.sem5.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
          <ViewColumn
            title={
              translation.courseManagerCard.courseListOrganism.semesterLabels
                .sem6
            }
            icon={<Calendar className="h-4 w-4 text-red-600" />}
            courses={coursesBySemester.sem6}
            bgColor="bg-red-50"
            count={coursesBySemester.sem6.length}
            emptyStateText={
              translation.courseManagerCard.courseListOrganism.emptyState
            }
          />
        </div>
      )}
    </div>
  );
};
