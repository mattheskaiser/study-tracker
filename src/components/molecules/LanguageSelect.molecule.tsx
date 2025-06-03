"use client";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";

import { FlagAtom } from "@/components/atoms/Flag.atom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageContext } from "@/context";

export const LanguageSelectMolecule = () => {
  const { control } = useForm();
  const { setLanguage } = useContext(LanguageContext);
  return (
    <Controller
      name="language"
      control={control}
      render={({ field }) => (
        <Select
          onValueChange={(value) => {
            field.onChange;
            if (setLanguage) {
              setLanguage(value);
            }
          }}
          defaultValue="en"
        >
          <SelectTrigger className="max-w-[150px]">
            <SelectValue placeholder="Sprache" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <FlagAtom countryCode={"us"} countryLabel={"English"} />
            </SelectItem>
            <SelectItem value="esp">
              <FlagAtom countryCode={"es"} countryLabel={"Español"} />
            </SelectItem>
            <SelectItem value="de">
              <FlagAtom countryCode={"de"} countryLabel={"Deutsch"} />
            </SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
};
