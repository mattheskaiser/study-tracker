import { useQueryState } from "nuqs";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseListOrganism } from "@/components/organisms/CourseList.organism";
import { CreateCourseOrganism } from "@/components/organisms/CreateCourse.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CourseManagerCardOrganism = () => {
  const [userId] = useQueryState("userId");
  const translation = useTranslation();
  return (
    <CardAtom
      className="order-2 w-full lg:order-1 lg:w-[65%]"
      title={
        <TextAtom size="large" isBold>
          {translation.courseManagerCard.cardTitle}
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          {translation.courseManagerCard.cardDescription}
        </TextAtom>
      }
      content={
        !userId ? (
          <TextAtom size="small" color="warning">
            {translation.courseManagerCard.cardNoteLoginFalse}
          </TextAtom>
        ) : (
          <div className="flex flex-col gap-y-6">
            <CreateCourseOrganism />
            <CourseListOrganism />
          </div>
        )
      }
    />
  );
};
