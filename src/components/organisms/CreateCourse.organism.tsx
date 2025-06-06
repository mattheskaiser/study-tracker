import type { Resolver, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { SelectMolecule } from "@/components/molecules/Select.molecule";
import { Input } from "@/components/ui/input";
import { SelectSemesterItems } from "@/constants/general.constants";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { courseSchema } from "@/schemas/schema";

type FormFields = z.infer<typeof courseSchema>;

export const CreateCourseOrganism = () => {
  const [userId] = useQueryState("userId");
  const translation = useTranslation();

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
      toast(
        translation.courseManagerCard.createCourseOrganism.toasts
          .successToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.createCourseOrganism.toasts
              .successToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    } catch {
      toast(
        translation.courseManagerCard.createCourseOrganism.toasts
          .errorToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.createCourseOrganism.toasts
              .errorToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-x-2 gap-y-4 md:flex-row">
        <Input
          type="text"
          placeholder={
            translation.courseManagerCard.createCourseOrganism.form
              .courseNamePlaceholder
          }
          {...register("name", { required: true })}
        />
        <SelectMolecule
          name="semester"
          placeholder={"Semester auswählen"}
          control={control}
          items={SelectSemesterItems}
        />
        <SelectMolecule
          name="status"
          defaultValue="open"
          control={control}
          placeholder={
            translation.courseManagerCard.createCourseOrganism.form
              .courseStatusPlaceholder
          }
          items={[
            {
              value: "open",
              children:
                translation.courseManagerCard.createCourseOrganism.form
                  .courseStatusOpen,
            },
            {
              value: "in_progress",
              children:
                translation.courseManagerCard.createCourseOrganism.form
                  .courseStatusInProgress,
            },
            {
              value: "done",
              children:
                translation.courseManagerCard.createCourseOrganism.form
                  .courseStatusDone,
            },
          ]}
        />
        <Input
          min={1}
          max={6}
          type="number"
          placeholder={
            translation.courseManagerCard.createCourseOrganism.form
              .courseGradePlaceholder
          }
          step="0.1"
          {...register("grade", {
            valueAsNumber: true,
          })}
          className="max-w-32"
        />
        <ButtonAtom
          isLoading={isSubmitting}
          label={
            translation.courseManagerCard.createCourseOrganism.form.buttonLabel
          }
          type="submit"
        >
          <Plus strokeWidth={2} />
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
