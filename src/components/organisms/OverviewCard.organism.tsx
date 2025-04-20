import { useQueryState } from "nuqs";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { StudyOverviewOrganism } from "@/components/organisms/StudyOverview.organism";

export const OverviewCardOrganism = () => {
  const [userId] = useQueryState("userId");
  return (
    <CardAtom
      className="order-1 w-full lg:order-2 lg:w-[35%]"
      title={
        <TextAtom size="large" isBold>
          Überblick
        </TextAtom>
      }
      description={
        <TextAtom size="small">Dein Studium auf einen Blick.</TextAtom>
      }
      content={
        !userId ? (
          <TextAtom size="small" color="warning">
            Hinweis: Bitte melde dich an, um auf deine Statistiken zuzugreifen.
          </TextAtom>
        ) : (
          <StudyOverviewOrganism />
        )
      }
    />
  );
};
