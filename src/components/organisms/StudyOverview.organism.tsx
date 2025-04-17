import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

import { OverviewBoxMolecule } from "@/components/molecules/OverviewBox.molecule";
import type { CoursesType, CourseType } from "@/types/general.types";

export const StudyOverviewOrganism = () => {
  const [userId] = useQueryState("userId");
  const [courses, setCourses] = useState<CourseType[]>([]);

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

  const amountOfOpenCourses = courses
    .filter((course) => course.status === "open")
    .length.toString();

  const amountOfFinishedCourses = courses
    .filter((course) => course.status === "done")
    .length.toString();

  return (
    <div className="flex flex-col gap-y-6">
      <OverviewBoxMolecule
        boxes={[
          { label: "Offene Kurse", value: amountOfOpenCourses },
          { label: "Abgeschlossene Kurse", value: amountOfFinishedCourses },
        ]}
      />
    </div>
  );
};
