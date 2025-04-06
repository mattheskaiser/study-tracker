import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CreateCourseOrganism } from "@/components/organisms/CreateCourse.organism";

export const CourseManagerCardOrganism = () => {
  return (
    <CardAtom
      className="order-2 w-full lg:order-1 lg:w-[65%]"
      title={
        <TextAtom size="large" isBold>
          Deine Kurse
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          Füge alle deine Kurse und Noten hinzu, um deinen Studienfortschritt
          genau zu verfolgen.
        </TextAtom>
      }
      content={<CreateCourseOrganism />}
    />
  );
};
