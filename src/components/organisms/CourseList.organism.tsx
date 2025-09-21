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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {courses.length} {courses.length === 1 ? 'Course' : 'Courses'}
          </h2>
          <ListFilterDropdownMolecule />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {showAllCourses
          ? courses.map((course) => (
              <CourseTabOrganism
                key={course.id}
                id={course.id}
                name={course.name}
                semester={course.semester}
                status={course.status}
                grade={course.grade}
              />
            ))
          : courses
              .slice(0, 8)
              .map((course) => (
                <CourseTabOrganism
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  semester={course.semester}
                  status={course.status}
                  grade={course.grade}
                />
              ))}
      </div>

      {courses.length > 8 && (
        <div className="flex justify-center pt-2">
          <ButtonAtom
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            onPress={() => setShowAllCourses((prev) => !prev)}
          >
            {showAllCourses ? (
              <>
                <ArrowUp className="h-4 w-4 mr-2 text-white" />
                Show Less
              </>
            ) : (
              <>
                <ArrowDown className="h-4 w-4 mr-2 text-white" />
                Show All ({courses.length} courses)
              </>
            )}
          </ButtonAtom>
        </div>
      )}
    </div>
  );
};
