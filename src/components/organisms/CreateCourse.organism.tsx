import type { SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { Plus } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormFields = {
  name: string;
  status: "open" | "inProgress" | "done";
  grade?: number;
};

export const CreateCourseOrganism = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      status: "open",
      grade: undefined,
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-x-2 gap-y-4 md:flex-row">
        <Input type="text" {...register("name", { required: true })} />
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue="open">
              <SelectTrigger className="max-w-[150px]">
                <SelectValue placeholder="Status auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Offen</SelectItem>
                <SelectItem value="inProgress">In Arbeit</SelectItem>
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
        <ButtonAtom
          disabled={isSubmitting}
          endContent={<Plus strokeWidth={2} />}
          type="submit"
        >
          Kurs hinzufügen
        </ButtonAtom>
      </div>
    </form>
  );
};
