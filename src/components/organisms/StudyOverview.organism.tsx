import { useMemo } from "react";
import { useQueryState } from "nuqs";

import { OverviewBoxMolecule } from "@/components/molecules/OverviewBox.molecule";
import { LoadingSpinnerMolecule } from "@/components/molecules/LoadingSpinner.molecule";
import { TextAtom } from "@/components/atoms/Text.atom";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const StudyOverviewOrganism = () => {
  const translation = useTranslation();
  const { courses, isPending, error } = useCourses();

  const finishedCourses = useMemo(() => 
    courses.filter((course) => course.status === "done"), [courses]
  );

  const sumOfGrades = useMemo(() => 
    finishedCourses.reduce((sum, course) => sum + (course.grade || 0), 0), 
    [finishedCourses]
  );

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
        Error loading courses
      </TextAtom>
    );
  }

  const amountOfOpenCourses = courses
    .filter((course) => course.status === "open")
    .length.toString();
  const amountOfFinishedCourses = finishedCourses.length.toString();
  const averageGrade =
    finishedCourses.length > 0
      ? (sumOfGrades / finishedCourses.length).toFixed(2)
      : "0";

  const progress = courses.length > 0 
    ? (finishedCourses.length / courses.length) * 100
    : 0;

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
