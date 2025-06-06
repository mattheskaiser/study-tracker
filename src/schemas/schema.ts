import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().nonempty("Email ist erforderlich").email("Ungültige Email"),
  newUser: z.boolean(),
});

export const courseSchema = z
  .object({
    name: z.string().nonempty("Kursname darf nicht leer sein"),
    semester: z.enum(["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"]),
    status: z.enum(["open", "in_progress", "done"]),
    grade: z.preprocess((val): number | undefined => {
      if (val === "" || val === null || val === undefined) return undefined;
      const parsed = Number(val);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().min(1).max(6).optional()),
  })
  .refine((data) => data.status !== "done" || typeof data.grade === "number", {
    path: ["grade"],
    message: "Note ist erforderlich, wenn der Kurs abgeschlossen ist.",
  })
  .refine((data) => data.status === "done" || data.grade === undefined, {
    path: ["grade"],
    message: "Note darf nur angegeben werden, wenn der Kurs abgeschlossen ist.",
  });

export const courseEditSchema = z
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
  .refine((data) => data.status !== "done" || typeof data.grade === "number", {
    path: ["grade"],
    message: "Note ist erforderlich, wenn der Kurs abgeschlossen ist.",
  })
  .refine((data) => data.status === "done" || data.grade === undefined, {
    path: ["grade"],
    message: "Note darf nur angegeben werden, wenn der Kurs abgeschlossen ist.",
  });
