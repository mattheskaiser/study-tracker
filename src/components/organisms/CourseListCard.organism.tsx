import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseListOrganism } from "@/components/organisms/CourseList.organism";

export const CourseListCardOrganism = () => {
  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          Kursliste
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          Liste deiner Kurse - bearbeite sie oder was auch immer
        </TextAtom>
      }
      content={<CourseListOrganism />}
    />
  );
};
