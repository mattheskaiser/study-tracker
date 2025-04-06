import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";

export const OverviewCardOrganism = () => {
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
    />
  );
};
