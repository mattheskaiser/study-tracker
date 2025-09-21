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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder={
            translation.courseManagerCard.createCourseOrganism.form
              .courseNamePlaceholder
          }
          {...register("name", { required: true })}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
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
      </div>

      <div className="flex gap-3">
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
          className="flex-1"
        />
        <ButtonAtom
          isLoading={isSubmitting || createCourse.isPending}
          type="submit"
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-shrink-0"
        >
          <Plus className="h-4 w-4 text-white" />
        </ButtonAtom>
      </div>

      {(errors.name || errors.semester || errors.grade) && (
        <div className="space-y-1 pt-2">
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
      )}
    </form>
  );
};
