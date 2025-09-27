import { CardMolecule } from "@/components/molecules/Card.molecule";
import { CreateCourseOrganism } from "@/components/organisms/CreateCourse.organism";
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
