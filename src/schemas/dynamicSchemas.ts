import { z } from "zod";

import type { getValidationMessages } from "@/utils/validation.utils";

type ValidationMessages = ReturnType<typeof getValidationMessages>;

export const createEmailSchema = (messages: ValidationMessages) =>
  z.object({
    email: z
      .string()
      .nonempty(messages.email.required)
      .email(messages.email.invalid),
    pin: z
      .string()
      .nonempty(messages.pin.required)
      .min(4, messages.pin.minLength)
      .max(6, messages.pin.maxLength)
      .regex(/^\d+$/, messages.pin.numbersOnly),
    confirmPin: z.string().optional(),
    newUser: z.boolean(),
  })
  .refine((data) => !data.newUser || (data.confirmPin && data.pin === data.confirmPin), {
    path: ["confirmPin"],
    message: messages.pin.confirmMatch,
  });

export const createCourseSchema = (messages: ValidationMessages) =>
  z
    .object({
      name: z.string().nonempty(messages.course.nameRequired),
      semester: z.enum(["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"], {
        errorMap: () => ({ message: messages.course.semesterRequired }),
      }),
      status: z.enum(["open", "in_progress", "done"]),
      grade: z.preprocess((val): number | undefined => {
        if (val === "" || val === null || val === undefined) return undefined;
        const parsed = Number(val);
        return isNaN(parsed) ? undefined : parsed;
      }, z.number().min(1, messages.course.gradeRange).max(6, messages.course.gradeRange).optional()),
    })
    .refine((data) => data.status !== "done" || typeof data.grade === "number", {
      path: ["grade"],
      message: messages.course.gradeRequiredWhenDone,
    })
    .refine((data) => data.status === "done" || data.grade === undefined, {
      path: ["grade"],
      message: messages.course.gradeOnlyWhenDone,
    });

export const createCourseEditSchema = (messages: ValidationMessages) =>
  z
    .object({
      semester: z
        .enum(["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"])
        .optional(),
      status: z.enum(["open", "in_progress", "done"]),
      grade: z.preprocess((val): number | undefined => {
        if (val === "" || val === null || val === undefined) return undefined;
        const parsed = Number(val);
        return isNaN(parsed) ? undefined : parsed;
      }, z.number().min(1, messages.course.gradeRange).max(6, messages.course.gradeRange).optional()),
    })
    .refine((data) => data.status !== "done" || typeof data.grade === "number", {
      path: ["grade"],
      message: messages.course.gradeRequiredWhenDone,
    })
    .refine((data) => data.status === "done" || data.grade === undefined, {
      path: ["grade"],
      message: messages.course.gradeOnlyWhenDone,
    });