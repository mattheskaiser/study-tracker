import { useMemo, useState } from "react";
import { type Resolver, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Save, Star } from "lucide-react";
import { useQueryState } from "nuqs";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseTabDropdownMolecule } from "@/components/molecules/course/CourseTabDropdown.molecule";
import { SelectMolecule } from "@/components/molecules/general/Select.molecule";
import { Input } from "@/components/ui/input";
import { useCourseMutations } from "@/hooks/useCourseMutations.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { createCourseEditSchema } from "@/schemas/dynamicSchemas";
import type { CourseStatusType } from "@/types/general.types";
import { formatSemester } from "@/utils/semester.utils";
import { getValidationMessages } from "@/utils/validation.utils";

type CourseTabMoleculeProps = {
  name: string;
  id: string;
  semester: string;
  status: CourseStatusType;
  grade?: number;
};

export const CourseTabOrganism = ({
  name,
  semester,
  status,
  grade,
  id,
}: CourseTabMoleculeProps) => {
  const [, setCourseId] = useQueryState("courseId");
  const [edit, setEdit] = useState<boolean>(false);
  const translation = useTranslation();
  const { updateCourse, deleteCourse } = useCourseMutations();

  const validationMessages = useMemo(
    () => getValidationMessages(translation),
    [translation],
  );

  const courseEditSchema = useMemo(
    () => createCourseEditSchema(validationMessages),
    [validationMessages],
  );

  type FormDataTypes = z.infer<typeof courseEditSchema>;

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

  const onSubmit: SubmitHandler<FormDataTypes> = (formData) => {
    updateCourse.mutate(
      { ...formData, courseId: id },
      {
        onSuccess: () => {
          setEdit(false);
        },
      },
    );
  };

  const handleDelete = async (courseId: string) => {
    await setCourseId(courseId);
    deleteCourse.mutate(courseId, {
      onSettled: () => {
        void setCourseId(null);
      },
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md">
      {edit ? (
        <form
          onSubmit={(e) => {
            void handleSubmit(onSubmit)(e);
          }}
          className="space-y-3"
        >
          <div className="space-y-3">
            <SelectMolecule
              name="status"
              placeholder={
                translation.courseManagerCard.courseListOrganism
                  .courseTabOrganism.selectStatusPlaceholder
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
              placeholder="Grade"
              {...register("grade", {
                valueAsNumber: true,
              })}
              className="w-full"
            />
          </div>
          {errors.grade && (
            <TextAtom size="small" color="error">
              {errors.grade.message}
            </TextAtom>
          )}
          <div className="flex justify-end gap-2">
            <ButtonAtom
              type="button"
              onPress={() => setEdit(false)}
              className="bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </ButtonAtom>
            <ButtonAtom
              isLoading={isSubmitting || updateCourse.isPending}
              type="submit"
              className="bg-gray-900 px-3 py-1 text-sm text-white hover:bg-gray-800"
            >
              <Save className="mr-1 h-3 w-3 text-white" />
              Save
            </ButtonAtom>
          </div>
        </form>
      ) : (
        <>
          <div className="mb-2 flex items-start justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 truncate text-sm font-semibold text-gray-900">
                {name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar className="h-3 w-3 flex-shrink-0" />
                <span>
                  {formatSemester(
                    semester,
                    translation.courseManagerCard.courseListOrganism
                      .semesterLabels,
                  )}
                </span>
              </div>
            </div>
            <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <CourseTabDropdownMolecule
                setEditAction={() => setEdit(true)}
                deleteAction={() => void handleDelete(id)}
              />
            </div>
          </div>

          {grade && (
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                <Star className="h-3 w-3 text-yellow-500" />
                <span>{grade}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
