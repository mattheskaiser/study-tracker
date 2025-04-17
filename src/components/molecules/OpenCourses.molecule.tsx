import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

import { TextAtom } from "@/components/atoms/Text.atom";
import type { CoursesType, CourseType } from "@/types/general.types";

export const OpenCoursesMolecule = () => {
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

  return (
    <div className="flex flex-row justify-between rounded-xl border p-2">
      <TextAtom size="small" className="flex items-center">
        Offene Kurse
      </TextAtom>
      <TextAtom size="medium" isBold className="flex items-center pr-6">
        {amountOfOpenCourses ?? "N/A"}
      </TextAtom>
    </div>
  );
};
