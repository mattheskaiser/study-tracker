import { Controller, useForm } from "react-hook-form";

import { TextAtom } from "@/components/atoms/Text.atom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CourseStatusType } from "@/types/general.types";

type CourseTabMoleculeProps = {
  name: string;
  status: CourseStatusType;
  grade?: number;
};

type FormDataTypes = {
  status: CourseStatusType;
  grade?: number;
};

export const CourseTabOrganism = ({
  name,
  status,
  grade,
}: CourseTabMoleculeProps) => {
  const { register, handleSubmit, reset, control } = useForm<FormDataTypes>({
    defaultValues: {
      status: status,
      grade: grade,
    },
  });

  const onSubmit = (formData: FormDataTypes) => {
    alert(formData);
    reset();
  };

  return (
    <div className="flex flex-row justify-between rounded-xl border p-2">
      <TextAtom size="small" isBold className="flex items-center">
        {name}
      </TextAtom>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-x-4">
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="max-w-[150px]">
                <SelectValue placeholder="Status auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Offen</SelectItem>
                <SelectItem value="in_progress">In Arbeit</SelectItem>
                <SelectItem value="done">Abgeschlossen</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Input
          type="number"
          step="0.1"
          {...register("grade", {
            valueAsNumber: true,
          })}
          className="max-w-16"
        />
      </form>
    </div>
  );
};
