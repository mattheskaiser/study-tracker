import { z } from "zod";

import { useTranslation } from "@/hooks/useTranslation.hook";

export const useEmailSchema = () => {
  const translation = useTranslation();

  return z.object({
    email: z
      .string()
      .nonempty(translation.validation.email.required)
      .email(translation.validation.email.invalid),
    newUser: z.boolean(),
  });
};

export const useCourseSchema = () => {
  const translation = useTranslation();

  return z
    .object({
      name: z.string().nonempty(translation.validation.course.nameRequired),
      semester: z.enum(["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"]),
      status: z.enum(["open", "in_progress", "done"]),
      grade: z.preprocess((val): number | undefined => {
        if (val === "" || val === null || val === undefined) return undefined;
        const parsed = Number(val);
        return isNaN(parsed) ? undefined : parsed;
      }, z.number().min(1).max(6).optional()),
    })
    .refine(
      (data) => data.status !== "done" || typeof data.grade === "number",
      {
        path: ["grade"],
        message: translation.validation.course.gradeRequiredWhenDone,
      },
    )
    .refine((data) => data.status === "done" || data.grade === undefined, {
      path: ["grade"],
      message: translation.validation.course.gradeOnlyWhenDone,
    });
};

export const useCourseEditSchema = () => {
  const translation = useTranslation();

  return z
    .object({
      semester: z
        .enum(["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"])
        .optional(),
      status: z.enum(["open", "in_progress", "done"]),
      grade: z.preprocess((val): number | undefined => {
        if (val === "" || val === null || val === undefined) return undefined;
        const parsed = Number(val);
        return isNaN(parsed) ? undefined : parsed;
      }, z.number().min(1).max(6).optional()),
    })
    .refine(
      (data) => data.status !== "done" || typeof data.grade === "number",
      {
        path: ["grade"],
        message: translation.validation.course.gradeRequiredWhenDone,
      },
    )
    .refine((data) => data.status === "done" || data.grade === undefined, {
      path: ["grade"],
      message: translation.validation.course.gradeOnlyWhenDone,
    });
};
