import { useQueryState } from "nuqs";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { StudyOverviewOrganism } from "@/components/organisms/StudyOverview.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const OverviewCardOrganism = () => {
  const [userId] = useQueryState("userId");
  const translation = useTranslation();
  return (
    <CardAtom
      className="order-1 w-full lg:order-2 lg:w-[35%]"
      title={
        <TextAtom size="large" isBold>
          {translation.overviewCard.cardTitle}
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          {translation.overviewCard.cardDescription}
        </TextAtom>
      }
      content={
        !userId ? (
          <TextAtom size="small" color="warning">
            {translation.overviewCard.cardNote}
          </TextAtom>
        ) : (
          <StudyOverviewOrganism />
        )
      }
    />
  );
};
