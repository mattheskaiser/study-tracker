import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseListOrganism } from "@/components/organisms/CourseList.organism";
import { useCourses } from "@/hooks/useCourses.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CourseListCardOrganism = () => {
  const translation = useTranslation();
  const { courses } = useCourses();

  return (
    <CardAtom
      title={
        <div className="flex items-center gap-3">
          <TextAtom size="large" isBold>
            {translation.courseListCard.cardTitle}
          </TextAtom>
          <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-sm font-medium">
            {courses.length} {translation.courseManagerCard.courseListOrganism.totalCourses}
          </span>
        </div>
      }
      description={
        <TextAtom size="small">
          {translation.courseListCard.cardDescription}
        </TextAtom>
      }
      content={<CourseListOrganism />}
    />
  );
};
