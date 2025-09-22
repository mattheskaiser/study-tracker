"use client";
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";

import { FlagAtom } from "@/components/atoms/Flag.atom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageContext } from "@/context";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const LanguageSelectMolecule = () => {
  const { control } = useForm();
  const { setLanguage } = useContext(LanguageContext);
  const translation = useTranslation();
  return (
    <Controller
      name="language"
      control={control}
      render={({ field }) => (
        <Select
          onValueChange={(value) => {
            field.onChange(value);
            if (setLanguage) {
              setLanguage(value);
            }
          }}
          defaultValue="en"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={translation.common.selectLanguage} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <FlagAtom countryCode={"us"} countryLabel={"English"} />
            </SelectItem>
            <SelectItem value="es">
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
