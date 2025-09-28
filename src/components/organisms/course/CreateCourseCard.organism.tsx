import { CardMolecule } from "@/components/molecules/general/Card.molecule";
import { CreateCourseOrganism } from "@/components/organisms/course/CreateCourse.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CreateCourseCardOrganism = () => {
  const translation = useTranslation();

  return (
    <CardMolecule
      title={translation.createCourseCard.cardTitle}
      description={translation.createCourseCard.cardDescription}
      content={<CreateCourseOrganism />}
    />
  );
};
