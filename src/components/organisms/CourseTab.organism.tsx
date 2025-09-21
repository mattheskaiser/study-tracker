import { useMemo, useState } from "react";
import { type Resolver, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, Calendar, GraduationCap, Save, Star } from "lucide-react";
import { useQueryState } from "nuqs";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { StatusBadge } from "@/components/atoms/StatusBadge.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { CourseTabDropdownMolecule } from "@/components/molecules/CourseTabDropdown.molecule";
import { SelectMolecule } from "@/components/molecules/Select.molecule";
import { Input } from "@/components/ui/input";
import { useCourseMutations } from "@/hooks/useCourseMutations.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { queryClient } from "@/lib/react-query";
import { cn } from "@/lib/utils";
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
  const [userId] = useQueryState("userId");
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

  const onSubmit: SubmitHandler<FormDataTypes> = async (formData) => {
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
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300">
      {edit ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-3">
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
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 text-sm"
            >
              Cancel
            </ButtonAtom>
            <ButtonAtom
              isLoading={isSubmitting || updateCourse.isPending}
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-1 text-sm"
            >
              <Save className="h-3 w-3 mr-1 text-white" />
              Save
            </ButtonAtom>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate text-sm mb-1">
                {name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar className="h-3 w-3 flex-shrink-0" />
                <span>{formatSemester(semester)}</span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
