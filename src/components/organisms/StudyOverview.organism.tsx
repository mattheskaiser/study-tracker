import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

import { OverviewBoxMolecule } from "@/components/molecules/OverviewBox.molecule";
import type { CoursesType, CourseType } from "@/types/general.types";

export const StudyOverviewOrganism = () => {
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
        const data: CoursesType = await response.json();
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

  return (
    <div className="flex flex-col gap-y-6">
      <OverviewBoxMolecule
        boxes={[
          { label: "Offene Kurse", value: amountOfOpenCourses },
          { label: "Abgeschlossene Kurse", value: amountOfFinishedCourses },
          { label: "Durchschnittsnote", value: averageGrade },
        ]}
      />
    </div>
  );
};
