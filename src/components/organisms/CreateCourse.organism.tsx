import { useMemo } from "react";
import type { Resolver, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { SelectMolecule } from "@/components/molecules/Select.molecule";
import { Input } from "@/components/ui/input";
import { SelectSemesterItems } from "@/constants/general.constants";
import { useCourseMutations } from "@/hooks/useCourseMutations.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { createCourseSchema } from "@/schemas/dynamicSchemas";
import { getValidationMessages } from "@/utils/validation.utils";

export const CreateCourseOrganism = () => {
  const [userId] = useQueryState("userId");
  const translation = useTranslation();
  const { createCourse } = useCourseMutations();

  const validationMessages = useMemo(
    () => getValidationMessages(translation),
    [translation],
  );

  const courseSchema = useMemo(
    () => createCourseSchema(validationMessages),
    [validationMessages],
  );

  type FormFields = z.infer<typeof courseSchema>;

  const defaultValues = {
    name: "",
    semester: undefined as FormFields["semester"] | undefined,
    status: "open" as FormFields["status"],
    grade: undefined,
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(courseSchema) as Resolver<FormFields>,
  });

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    createCourse.mutate(formData, {
      onSuccess: () => {
        reset(defaultValues);
      },
    });
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
          placeholder={
            translation.courseManagerCard.createCourseOrganism.form
              .semesterPlaceholder
          }
          control={control}
          items={semesterItems}
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
          isLoading={isSubmitting || createCourse.isPending}
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
        {errors.semester && (
          <TextAtom size="small" color="error">
            {errors.semester.message}
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
