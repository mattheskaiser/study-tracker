import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { ListFilterDropdownMolecule } from "@/components/molecules/ListFilterDropdown.molecule";
import { LoadingSpinnerMolecule } from "@/components/molecules/LoadingSpinner.molecule";
import { CourseTabOrganism } from "@/components/organisms/CourseTab.organism";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CourseListOrganism = () => {
  const translation = useTranslation();

  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  const { isPending, error, courses } = useCourses();

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
      <TextAtom size="small" color="warning">
        {translation.courseManagerCard.courseListOrganism.noCoursesAddedNote}
      </TextAtom>
    );
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row justify-start">
        <ListFilterDropdownMolecule />
      </div>
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
            onPress={() => setShowAllCourses((prev) => !prev)}
          >
            {showAllCourses ? <ArrowUp /> : <ArrowDown />}
          </ButtonAtom>
        )}
      </div>
    </div>
  );
};
