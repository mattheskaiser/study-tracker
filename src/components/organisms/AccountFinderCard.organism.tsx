import { useQueryState } from "nuqs";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { FindEmailOrganism } from "@/components/organisms/FindEmail.organism";

export const AccountFinderCardOrganism = () => {
  const [userId] = useQueryState("userId");
  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          Finde Deine Daten
        </TextAtom>
      }
      description={
        !userId ? (
          <TextAtom size="small">
            Falls du bereits registriert bist, suche nach deiner E-Mail.
            Andernfalls gib deine E-Mail ein, um dein Konto freizuschalten.
          </TextAtom>
        ) : (
          <TextAtom size="small" className="text-green-500">
            Hinweis: Du bist nun mit deinem Account verbunden und kannst deine
            Kurse einsehen, bearbeiten und deine Statistiken abrufen.
          </TextAtom>
        )
      }
      content={<FindEmailOrganism />}
    />
  );
};
