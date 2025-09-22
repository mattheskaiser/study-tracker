import { useQueryState } from "nuqs";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { FindEmailOrganism } from "@/components/organisms/FindEmail.organism";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const AccountFinderCardOrganism = () => {
  const [userId] = useQueryState("userId");
  const translation = useTranslation();

  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          {userId 
            ? translation.accountFinderCard.cardTitleLoggedIn
            : translation.accountFinderCard.cardTitle
          }
        </TextAtom>
      }
      description={
        !userId ? (
          <TextAtom size="small">
            {translation.accountFinderCard.cardDescriptionLoginFalse}
          </TextAtom>
        ) : null
      }
      content={<FindEmailOrganism />}
    />
  );
};
