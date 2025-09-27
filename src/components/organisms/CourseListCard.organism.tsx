import { TotalCoursesBadgeAtom } from "@/components/atoms/TotalCoursesBadge.atom";
import { CardMolecule } from "@/components/molecules/Card.molecule";
import { CourseListOrganism } from "@/components/organisms/CourseList.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CourseListCardOrganism = () => {
  const translation = useTranslation();

  return (
    <div className="relative">
      <CardMolecule
        title={translation.courseListCard.cardTitle}
        description={translation.courseListCard.cardDescription}
        content={<CourseListOrganism />}
      />
      <div className={"absolute top-6.5 left-40"}>
        <TotalCoursesBadgeAtom />
      </div>
    </div>
  );
};
