import type { ReactNode } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectMoleculeProps<T extends FieldValues> = {
  name: FieldPath<T>;
  placeholder: string;
  defaultValue?: string;
  control: Control<T>;
  items: {
    value: string;
    children: ReactNode;
  }[];
};

export const SelectMolecule = <T extends FieldValues>({
  name,
  placeholder,
  defaultValue,
  control,
  items,
}: SelectMoleculeProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          value={field.value || ""}
          defaultValue={defaultValue}
        >
          <SelectTrigger className="max-w-[150px]">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.children}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};
