import { useMemo, useState } from "react";
import { BookOpen } from "lucide-react";

import { EmptyStateAtom } from "@/components/atoms/EmptyState.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { ViewSelectorMolecule } from "@/components/molecules/course/ViewSelector.molecule";
import { LoadingSpinnerMolecule } from "@/components/molecules/general/LoadingSpinner.molecule";
import { SemesterViewOrganism } from "@/components/organisms/course/SemesterView.organism";
import { StatusViewOrganism } from "@/components/organisms/course/StatusView.organism";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";
import type { CoursesBySemester, CoursesByStatus } from "@/types/course.types";

export const CourseListOrganism = () => {
  const translation = useTranslation();
  const { isPending, error, courses } = useCourses();
  const [activeView, setActiveView] = useState<"status" | "semester">("status");

  const coursesByStatus = useMemo((): CoursesByStatus => {
    return {
      open: courses.filter((course) => course.status === "open"),
      in_progress: courses.filter((course) => course.status === "in_progress"),
      done: courses.filter((course) => course.status === "done"),
    };
  }, [courses]);

  const coursesBySemester = useMemo((): CoursesBySemester => {
    return {
      sem1: courses.filter((course) => course.semester === "sem1"),
      sem2: courses.filter((course) => course.semester === "sem2"),
      sem3: courses.filter((course) => course.semester === "sem3"),
      sem4: courses.filter((course) => course.semester === "sem4"),
      sem5: courses.filter((course) => course.semester === "sem5"),
      sem6: courses.filter((course) => course.semester === "sem6"),
    };
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
      <EmptyStateAtom
        icon={<BookOpen />}
        message={
          translation.courseManagerCard.courseListOrganism.noCoursesAddedNote
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      <ViewSelectorMolecule
        activeView={activeView}
        onViewChange={setActiveView}
        statusLabel={
          translation.courseManagerCard.courseListOrganism.viewTabs.status
        }
        semesterLabel={
          translation.courseManagerCard.courseListOrganism.viewTabs.semester
        }
      />

      {activeView === "status" ? (
        <StatusViewOrganism
          coursesByStatus={coursesByStatus}
          translation={translation}
        />
      ) : (
        <SemesterViewOrganism
          coursesBySemester={coursesBySemester}
          translation={translation}
        />
      )}
    </div>
  );
};
