// @/schemas/schema.ts
import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().nonempty("Email ist erforderlich").email("Ungültige Email"),
  newUser: z.boolean(),
});

export const courseSchema = z
  .object({
    name: z.string().nonempty("Kursname darf nicht leer sein"),
    status: z.enum(["open", "in_progress", "done"]),
    grade: z.number().optional(),
  })
  .refine(
    (data) => {
      if (data.status !== "done" && typeof data.grade === "number") {
        return false;
      }
      return true;
    },
    {
      path: ["grade"],
      message:
        "Note darf nur angegeben werden, wenn der Kurs abgeschlossen ist.",
    },
  );
