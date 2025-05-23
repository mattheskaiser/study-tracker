import ReactCountryFlag from "react-country-flag";

import { TextAtom } from "@/components/atoms/Text.atom";

type FlagAtomProps = {
  countryCode: "us" | "de" | "es";
  countryLabel: "English" | "Deutsch" | "Español";
};

export const FlagAtom = ({ countryCode, countryLabel }: FlagAtomProps) => {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <ReactCountryFlag
        svg
        countryCode={countryCode}
        style={{
          width: "1.5em",
          height: "1.5em",
        }}
      />
      <TextAtom size={"small"}>{countryLabel}</TextAtom>
    </div>
  );
};
