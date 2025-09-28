import { useMemo } from "react";

import { OverviewBoxMolecule } from "@/components/molecules/statistics/OverviewBox.molecule";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const StudyOverviewOrganism = () => {
  const translation = useTranslation();
  const { courses } = useCourses();

  const { finishedCourses, sumOfGrades } = useMemo(() => {
    const finished = courses.filter((course) => course.status === "done");
    const total = finished.reduce(
      (sum, course) => sum + (course.grade || 0),
      0,
    );
    return { finishedCourses: finished, sumOfGrades: total };
  }, [courses]);

  const amountOfOpenCourses = courses
    .filter((course) => course.status === "open")
    .length.toString();
  const amountOfFinishedCourses = finishedCourses.length.toString();
  const averageGrade =
    finishedCourses.length > 0
      ? (sumOfGrades / finishedCourses.length).toFixed(2)
      : "0";

  const progress =
    courses.length > 0 ? (finishedCourses.length / courses.length) * 100 : 0;

  return (
    <div className="flex flex-col gap-y-6">
      <OverviewBoxMolecule
        boxes={[
          {
            label: translation.overviewCard.openCourses,
            value: amountOfOpenCourses,
          },
          {
            label: translation.overviewCard.finishedCourses,
            value: amountOfFinishedCourses,
          },
          { label: translation.overviewCard.gradeAverage, value: averageGrade },
          {
            label: translation.overviewCard.progress,
            value: progress.toString(),
            isProgressBar: true,
          },
        ]}
      />
    </div>
  );
};
