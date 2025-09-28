import { BookOpen, Clock, GraduationCap } from "lucide-react";

import { CourseColumnOrganism } from "@/components/organisms/course/CourseColumn.organism";
import type { CoursesByStatus } from "@/types/course.types";
import type { enTranslations } from "@/translations/en.translations";

type StatusViewProps = {
  coursesByStatus: CoursesByStatus;
  translation: typeof enTranslations;
};

export const StatusViewOrganism = ({
  coursesByStatus,
  translation,
}: StatusViewProps) => {
  const statusColumns = [
    {
      key: "open" as const,
      title:
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .courseStatusOpen,
      icon: <BookOpen className="h-4 w-4 text-blue-600" />,
      bgColor: "bg-blue-50",
      courses: coursesByStatus.open,
    },
    {
      key: "in_progress" as const,
      title:
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .courseStatusInProgress,
      icon: <Clock className="h-4 w-4 text-yellow-600" />,
      bgColor: "bg-yellow-50",
      courses: coursesByStatus.in_progress,
    },
    {
      key: "done" as const,
      title:
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .courseStatusDone,
      icon: <GraduationCap className="h-4 w-4 text-green-600" />,
      bgColor: "bg-green-50",
      courses: coursesByStatus.done,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {statusColumns.map((column) => (
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
