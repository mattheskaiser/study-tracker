import { Calendar } from "lucide-react";

import { CourseColumnOrganism } from "@/components/organisms/course/CourseColumn.organism";
import type { CoursesBySemester } from "@/types/course.types";
import type { enTranslations } from "@/translations/en.translations";

type SemesterViewProps = {
  coursesBySemester: CoursesBySemester;
  translation: typeof enTranslations;
};

export const SemesterViewOrganism = ({
  coursesBySemester,
  translation,
}: SemesterViewProps) => {
  const semesterColumns = [
    {
      key: "sem1" as const,
      title:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem1,
      icon: <Calendar className="h-4 w-4 text-purple-600" />,
      bgColor: "bg-purple-50",
      courses: coursesBySemester.sem1,
    },
    {
      key: "sem2" as const,
      title:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem2,
      icon: <Calendar className="h-4 w-4 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      courses: coursesBySemester.sem2,
    },
    {
      key: "sem3" as const,
      title:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem3,
      icon: <Calendar className="h-4 w-4 text-blue-600" />,
      bgColor: "bg-blue-50",
      courses: coursesBySemester.sem3,
    },
    {
      key: "sem4" as const,
      title:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem4,
      icon: <Calendar className="h-4 w-4 text-green-600" />,
      bgColor: "bg-green-50",
      courses: coursesBySemester.sem4,
    },
    {
      key: "sem5" as const,
      title:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem5,
      icon: <Calendar className="h-4 w-4 text-yellow-600" />,
      bgColor: "bg-yellow-50",
      courses: coursesBySemester.sem5,
    },
    {
      key: "sem6" as const,
      title:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem6,
      icon: <Calendar className="h-4 w-4 text-red-600" />,
      bgColor: "bg-red-50",
      courses: coursesBySemester.sem6,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {semesterColumns.map((column) => (
        <CourseColumnOrganism
          key={column.key}
          title={column.title}
          icon={column.icon}
          courses={column.courses}
          bgColor={column.bgColor}
          count={column.courses.length}
          emptyStateText={
            translation.courseManagerCard.courseListOrganism.emptyState
          }
        />
      ))}
    </div>
  );
};
