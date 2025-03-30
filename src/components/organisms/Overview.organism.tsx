import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";

export const OverviewOrganism = () => {
  return (
    <CardAtom
      className="w-[35%]"
      title={
        <TextAtom size="large" isBold>
          Überblick
        </TextAtom>
      }
      description={
        <TextAtom size="small">Dein Studium auf einen Blick.</TextAtom>
      }
    />
  );
};
