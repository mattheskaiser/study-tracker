import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useQueryState } from "nuqs";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { LoadingSpinnerMolecule } from "@/components/molecules/LoadingSpinner.molecule";
import { CourseTabOrganism } from "@/components/organisms/CourseTab.organism";
import type { CoursesType, CourseType } from "@/types/general.types";

export const CourseListOrganism = () => {
  const [userId] = useQueryState("userId");
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

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

        const data = (await response.json()) as CoursesType;
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
    return (
      <TextAtom size="small" color="error">
        Deine Kurse konnten nicht geladen werden.
      </TextAtom>
    );
  }

  if (courses.length === 0) {
    return (
      <TextAtom size="small" color="warning">
        Hinweis: Du hast bisher noch keine Kurse angelegt.
      </TextAtom>
    );
  }
  return (
    <div className="flex flex-col gap-y-2">
      {showAllCourses
        ? courses.map((course) => (
            <CourseTabOrganism
              key={course.id}
              id={course.id}
              name={course.name}
              status={course.status}
              grade={course.grade}
            />
          ))
        : courses
            .slice(0, 5)
            .map((course) => (
              <CourseTabOrganism
                key={course.id}
                id={course.id}
                name={course.name}
                status={course.status}
                grade={course.grade}
              />
            ))}
      {courses.length > 5 && (
        <ButtonAtom
          className="mt-6"
          endContent={showAllCourses ? <ArrowUp /> : <ArrowDown />}
          onPress={() => setShowAllCourses((prev) => !prev)}
        >
          {showAllCourses ? "Kurse einklappen" : "Alle Kurse anzeigen"}
        </ButtonAtom>
      )}
    </div>
  );
};
