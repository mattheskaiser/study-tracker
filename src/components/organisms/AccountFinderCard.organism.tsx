import { useQueryState } from "nuqs";

import { CardMolecule } from "@/components/molecules/Card.molecule";
import { FindEmailOrganism } from "@/components/organisms/FindEmail.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const AccountFinderCardOrganism = () => {
  const [userId] = useQueryState("userId");
  const translation = useTranslation();

  return (
    <CardMolecule
      title={
        userId
          ? translation.accountFinderCard.cardTitleLoggedIn
          : translation.accountFinderCard.cardTitle
      }
      description={
        !userId ? translation.accountFinderCard.cardDescriptionLoginFalse : null
      }
      content={<FindEmailOrganism />}
    />
  );
};
