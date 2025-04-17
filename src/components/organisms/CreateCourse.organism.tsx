import type { SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CourseStatusType } from "@/types/general.types";

type FormFields = {
  name: string;
  status: CourseStatusType;
  grade?: number;
};

export const CreateCourseOrganism = () => {
  const [userId] = useQueryState("userId");

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      status: "open",
      grade: undefined,
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    try {
      await axios.post("/api/courses", { ...formData, userId });
      reset();
      toast("Der Vorgang war erfolgreich!", {
        dismissible: true,
        description: "Der Kurs konnte erfolgreich erstellt werden.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
    } catch {
      toast("Der Vorgang war leider nicht erfolgreich.", {
        dismissible: true,
        description: "Der Kurs konnte leider nicht erstellt werden.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
    }
  };

  const statusValue = watch("status");
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-x-2 gap-y-4 md:flex-row">
        <Input
          type="text"
          placeholder="Kursname eingeben..."
          {...register("name", { required: true })}
        />
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
                <SelectItem value="in_progress">In Arbeit</SelectItem>
                <SelectItem value="done">Abgeschlossen</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Input
          min={1}
          max={6}
          disabled={statusValue === "open" || statusValue === "in_progress"}
          aria-description="Bitte Note angeben (optional)"
          type="number"
          placeholder="Note eingeben..."
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
