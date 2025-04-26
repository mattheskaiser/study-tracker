import { useState } from "react";
import {
  Controller,
  type Resolver,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Save } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseTabDropdownMolecule } from "@/components/molecules/CourseTabDropdown.molecule";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { courseEditSchema } from "@/schemas/schema";
import type { CourseStatusType } from "@/types/general.types";

type CourseTabMoleculeProps = {
  name: string;
  id: string;
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
  id,
}: CourseTabMoleculeProps) => {
  const [, setCourseId] = useQueryState("courseId");
  const [edit, setEdit] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataTypes>({
    defaultValues: {
      status: status,
      grade: grade,
    },
    resolver: zodResolver(courseEditSchema) as Resolver<FormDataTypes>,
  });

  const onSubmit: SubmitHandler<FormDataTypes> = async (formData) => {
    try {
      await axios.patch("/api/courses", { ...formData, courseId: id });
      setEdit(false);
      toast("Dein Kurs wurde erfolgreich angepasst!", {
        dismissible: true,
        description:
          "Bitte aktualisiere die Seite, um deine Änderungen zu sehen.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
    } catch {
      toast("Der Vorgang war leider nicht erfolgreich.", {
        dismissible: true,
        description: "Der Kurs konnte leider nicht bearbeitet werden.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
    }
  };

  const handleDelete = async (courseId: string) => {
    await setCourseId(courseId);
    try {
      const response = await fetch(`/api/courses?courseId=${courseId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete course");
      }
      toast("Der Kurs wurde erfolgreich gelöscht.", {
        dismissible: true,
        description:
          "Bitte aktualisiere die Seite, um deine Änderungen zu sehen.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
    } catch (error) {
      console.error("Error deleting course:", error);
      toast("Der Vorgang war leider nicht erfolgreich.", {
        dismissible: true,
        description: "Der Kurs konnte leider nicht gelöscht werden.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
    }
    void setCourseId(null);
  };

  const displayStatus = (formStatus: FormDataTypes["status"]) => {
    if (formStatus === "open") return "Offen";
    if (formStatus === "in_progress") return "In Arbeit";
    if (formStatus === "done") return "Abgeschlossen";
  };

  return (
    <div className={cn("flex flex-row justify-between rounded-xl border p-2")}>
      <div className="flex flex-col gap-y-2">
        <TextAtom
          size="small"
          isBold
          className="flex max-w-[250px] items-center"
        >
          {name}
        </TextAtom>
        {errors.grade && (
          <TextAtom size="small" color="error">
            {errors.grade.message}
          </TextAtom>
        )}
      </div>

      {edit ? (
        <form
          /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-x-4"
        >
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
            min={1}
            max={6}
            type="number"
            step="0.1"
            {...register("grade", {
              valueAsNumber: true,
            })}
            className="max-w-16"
          />
          <ButtonAtom
            type="submit"
            isIconOnly
            icon={<Save />}
            onPress={handleSubmit(onSubmit)}
          />
        </form>
      ) : (
        <div className="flex flex-row items-center gap-x-6">
          <div className="flex flex-row gap-x-6">
            <TextAtom className="text-start">{`Status: ${displayStatus(status)}`}</TextAtom>
            <TextAtom className="text-start">{`Note: ${grade ? grade : "N/A"}`}</TextAtom>
          </div>

          <CourseTabDropdownMolecule
            setEditAction={() => setEdit(true)}
            deleteAction={() => handleDelete(id)}
          />
        </div>
      )}
    </div>
  );
};
