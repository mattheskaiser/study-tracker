import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { FindEmailOrganism } from "@/components/organisms/FindEmail.organism";

export const AccountFinderCardOrganism = () => {
  return (
    <CardAtom
      title={
        <TextAtom size="large" isBold>
          Finde Deine Daten
        </TextAtom>
      }
      description={
        <div className="flex flex-col gap-y-2">
          <TextAtom size="small">
            Falls du bereits registriert bist, suche nach deiner E-Mail.
            Andernfalls gib deine E-Mail ein, um dein Konto freizuschalten.
          </TextAtom>
        </div>
      }
      content={
        <div className="flex w-full flex-row gap-x-6">
          <FindEmailOrganism />
        </div>
      }
    />
  );
};
