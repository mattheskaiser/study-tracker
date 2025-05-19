"use client";
import { Controller, useForm } from "react-hook-form";

import { FlagAtom } from "@/components/atoms/Flag.atom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LanguageSelectMolecule = () => {
  const { control } = useForm();
  return (
    <Controller
      name="language"
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue="english">
          <SelectTrigger className="max-w-[150px]">
            <SelectValue placeholder="Sprache" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">
              <FlagAtom countryCode={"us"} countryLabel={"English"} />
            </SelectItem>
            <SelectItem value="spanish">
              <FlagAtom countryCode={"es"} countryLabel={"Español"} />
            </SelectItem>
            <SelectItem value="german">
              <FlagAtom countryCode={"de"} countryLabel={"Deutsch"} />
            </SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
};
