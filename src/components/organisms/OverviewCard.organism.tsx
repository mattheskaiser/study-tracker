import { CardMolecule } from "@/components/molecules/Card.molecule";
import { StudyOverviewOrganism } from "@/components/organisms/StudyOverview.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const OverviewCardOrganism = () => {
  const translation = useTranslation();
  return (
    <CardMolecule
      className="order-1 w-full lg:order-2"
      title={translation.overviewCard.cardTitle}
      description={translation.overviewCard.cardDescription}
      content={<StudyOverviewOrganism />}
    />
  );
};
