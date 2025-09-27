import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const TotalCoursesBadgeAtom = () => {
  const translation = useTranslation();
  const { courses } = useCourses();
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
      {courses.length}{" "}
      {translation.courseManagerCard.courseListOrganism.totalCourses}
    </span>
  );
};
