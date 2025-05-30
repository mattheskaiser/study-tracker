import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CreateCourseOrganism } from "@/components/organisms/CreateCourse.organism";

export const CreateCourseCardOrganism = () => {
  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          Kurserstellung
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          Füge neue Kurse zu deiner Kursliste hinzu
        </TextAtom>
      }
      content={<CreateCourseOrganism />}
    />
  );
};
