import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

import { TextAtom } from "@/components/atoms/Text.atom";
import { LoadingSpinnerMolecule } from "@/components/molecules/LoadingSpinner.molecule";
import { CourseTabOrganism } from "@/components/organisms/CourseTab.organism";
import type { CoursesType, CourseType } from "@/types/general.types";

export const CourseListOrganism = () => {
  const [userId] = useQueryState("userId");
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!userId) {
        setCourses([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`/api/courses?userId=${userId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.status}`);
        }

        const data: CoursesType = await response.json();
        setCourses(data.courses || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch courses",
        );
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    void fetchCourses();
  }, [userId]);

  if (loading) {
    return (
      <div className="mt-6 flex w-full justify-center">
        <LoadingSpinnerMolecule color="black" />
      </div>
    );
  }

  if (error) {
    return <div className="py-2 text-red-500">Error: {error}</div>;
  }

  if (courses.length === 0) {
    return (
      <TextAtom size="small" className="text-yellow-500">
        Hinweis: Du hast bisher noch keine Kurse angelegt.
      </TextAtom>
    );
  }
  return (
    <div className="flex flex-col gap-y-2">
      {courses.map((course) => (
        <CourseTabOrganism
          key={course.name}
          id={course.id}
          name={course.name}
          status={course.status}
          grade={course.grade}
        />
      ))}
    </div>
  );
};
