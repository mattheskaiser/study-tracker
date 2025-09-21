import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CreateCourseOrganism } from "@/components/organisms/CreateCourse.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CreateCourseCardOrganism = () => {
  const translation = useTranslation();

  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          {translation.createCourseCard.cardTitle}
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          {translation.createCourseCard.cardDescription}
        </TextAtom>
      }
      content={<CreateCourseOrganism />}
    />
  );
};
