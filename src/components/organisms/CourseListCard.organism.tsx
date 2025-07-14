import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseListOrganism } from "@/components/organisms/CourseList.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CourseListCardOrganism = () => {
  const translation = useTranslation();
  
  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          {translation.courseListCard.title}
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          {translation.courseListCard.description}
        </TextAtom>
      }
      content={<CourseListOrganism />}
    />
  );
};
