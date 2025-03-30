import { Search } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const AccountFinderOrganism = () => {
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
          <div className="flex flex-row items-center gap-x-2">
            <TextAtom size="small">Bist du neu hier?</TextAtom>
            <Switch />
          </div>
        </div>
      }
      content={
        <div className="flex w-full flex-row gap-x-6">
          <Input disabled type="email" placeholder="Email" />
          <ButtonAtom endContent={<Search strokeWidth={2} />}>
            Email suchen
          </ButtonAtom>
        </div>
      }
    />
  );
};
