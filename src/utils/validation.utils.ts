import type { enTranslations } from "@/translations/en.translations";

type TranslationType = typeof enTranslations;

export const getValidationMessages = (translation: TranslationType) => ({
  email: {
    required: translation.validation.email.required,
    invalid: translation.validation.email.invalid,
  },
  course: {
    nameRequired: translation.validation.course.nameRequired,
    semesterRequired: translation.validation.course.semesterRequired,
    gradeRequiredWhenDone: translation.validation.course.gradeRequiredWhenDone,
    gradeOnlyWhenDone: translation.validation.course.gradeOnlyWhenDone,
    gradeRange: translation.validation.course.gradeRange,
  },
});