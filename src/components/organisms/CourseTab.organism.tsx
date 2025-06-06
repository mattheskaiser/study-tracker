import { useState } from "react";
import { type Resolver, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Save } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseTabDropdownMolecule } from "@/components/molecules/CourseTabDropdown.molecule";
import { SelectMolecule } from "@/components/molecules/Select.molecule";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/hooks/useTranslation.hook";
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
    formState: { errors, isSubmitting },
  } = useForm<FormDataTypes>({
    defaultValues: {
      status: status,
      grade: grade,
    },
    resolver: zodResolver(courseEditSchema) as Resolver<FormDataTypes>,
  });

  const translation = useTranslation();

  const onSubmit: SubmitHandler<FormDataTypes> = async (formData) => {
    try {
      await axios.patch("/api/courses", { ...formData, courseId: id });
      setEdit(false);
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.editSuccessToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.editSuccessToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    } catch {
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.editErrorToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.editErrorToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
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
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.deleteSuccessToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.deleteSuccessToastMessage,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    } catch (error) {
      console.error("Error deleting course:", error);
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.deleteErrorToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.deleteErrorToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    }
    void setCourseId(null);
  };

  const displayStatus = (formStatus: FormDataTypes["status"]) => {
    if (formStatus === "open")
      return translation.courseManagerCard.courseListOrganism.courseTabOrganism
        .courseStatusOpen;
    if (formStatus === "in_progress")
      return translation.courseManagerCard.courseListOrganism.courseTabOrganism
        .courseStatusInProgress;
    if (formStatus === "done")
      return translation.courseManagerCard.courseListOrganism.courseTabOrganism
        .courseStatusDone;
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl border p-2 shadow-md lg:flex-row",
      )}
    >
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
          className="mt-2 flex flex-row gap-x-4 lg:mt-0"
        >
          <SelectMolecule
            name="status"
            placeholder={
              translation.courseManagerCard.courseListOrganism.courseTabOrganism
                .selectStatusPlaceholder
            }
            control={control}
            items={[
              {
                value: "open",
                children:
                  translation.courseManagerCard.courseListOrganism
                    .courseTabOrganism.courseStatusOpen,
              },
              {
                value: "in_progress",
                children:
                  translation.courseManagerCard.courseListOrganism
                    .courseTabOrganism.courseStatusInProgress,
              },
              {
                value: "done",
                children:
                  translation.courseManagerCard.courseListOrganism
                    .courseTabOrganism.courseStatusDone,
              },
            ]}
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
            isLoading={isSubmitting}
            type="submit"
            onPress={() => void handleSubmit(onSubmit)}
            label="Speichern"
          >
            <Save />
          </ButtonAtom>
        </form>
      ) : (
        <div className="relative flex flex-row items-center gap-x-6 gap-y-2">
          <div className="flex flex-col gap-x-6 lg:flex-row">
            <TextAtom className="text-start">{`${
              translation.courseManagerCard.courseListOrganism.courseTabOrganism
                .status
            }: ${displayStatus(status)}`}</TextAtom>
            <TextAtom className="text-start">{`${
              translation.courseManagerCard.courseListOrganism.courseTabOrganism
                .grade
            }: ${grade ? grade : "N/A"}`}</TextAtom>
          </div>
          <div className="absolute top-0 right-0 lg:relative">
            <CourseTabDropdownMolecule
              setEditAction={() => setEdit(true)}
              deleteAction={() => void handleDelete(id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
