import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

import { OverviewBoxMolecule } from "@/components/molecules/OverviewBox.molecule";
import { useTranslation } from "@/hooks/useTranslation.hook";
import type { CoursesType, CourseType } from "@/types/general.types";

export const StudyOverviewOrganism = () => {
  const translation = useTranslation();

  const [userId] = useQueryState("userId");
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [finishedCourses, setFinishedCourses] = useState<CourseType[]>([]);
  const [sumOfGrades, setSumOfGrades] = useState<number>(0);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!userId) {
        setCourses([]);
        return;
      }
      try {
        const response = await fetch(`/api/courses?userId=${userId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.status}`);
        }
        const data = (await response.json()) as CoursesType;
        setCourses(data.courses || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    void fetchCourses();
  }, [userId]);

  useEffect(() => {
    const finished = courses.filter((course) => course.status === "done");
    setFinishedCourses(finished);

    // @ts-expect-error grade could technically be undefined in type - but ensured through validation
    const total = finished.reduce((sum, course) => sum + course.grade, 0);
    setSumOfGrades(total);
  }, [courses]);

  const amountOfOpenCourses = courses
    .filter((course) => course.status === "open")
    .length.toString();
  const amountOfFinishedCourses = finishedCourses.length.toString();
  const averageGrade =
    finishedCourses.length > 0
      ? (sumOfGrades / finishedCourses.length).toFixed(2)
      : "0";

  const progress = (finishedCourses.length / courses.length) * 100;

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
