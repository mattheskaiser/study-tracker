import type { Resolver, SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courseSchema } from "@/schemas/schema";

type FormFields = z.infer<typeof courseSchema>;

export const CreateCourseOrganism = () => {
  const [userId] = useQueryState("userId");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      status: "open",
      grade: undefined,
    },
    resolver: zodResolver(courseSchema) as Resolver<FormFields>,
  });

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    try {
      await axios.post("/api/courses", { ...formData, userId });
      reset();
      toast("Der Kurse wurde erfolgreich erstellt!", {
        dismissible: true,
        description:
          "Bitte aktualisiere die Seite, um deine Änderungen zu sehen.",
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

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
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
          aria-description="Bitte Note angeben (optional)"
          type="number"
          placeholder="Note eingeben..."
          step="0.1"
          {...register("grade", {
            valueAsNumber: true,
          })}
          className="max-w-32"
        />
        <ButtonAtom
          disabled={isSubmitting}
          endContent={<Plus strokeWidth={2} />}
          type="submit"
        >
          Kurs hinzufügen
        </ButtonAtom>
      </div>
      <div className="flex flex-col gap-y-2">
        {errors.name && (
          <TextAtom size="small" color="error">
            {errors.name.message}
          </TextAtom>
        )}
        {errors.grade && (
          <TextAtom size="small" color="error">
            {errors.grade.message}
          </TextAtom>
        )}
      </div>
    </form>
  );
};
