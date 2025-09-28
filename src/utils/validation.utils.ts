import type { enTranslations } from "@/translations/en.translations";

type TranslationType = typeof enTranslations;

export const getValidationMessages = (translation: TranslationType) => ({
  email: {
    required: translation.validation.email.required,
    invalid: translation.validation.email.invalid,
  },
  pin: {
    required: translation.validation.pin.required,
    minLength: translation.validation.pin.minLength,
    maxLength: translation.validation.pin.maxLength,
    numbersOnly: translation.validation.pin.numbersOnly,
    confirmMatch: translation.validation.pin.confirmMatch,
    confirmRequired: translation.validation.pin.confirmRequired,
  },
  course: {
    nameRequired: translation.validation.course.nameRequired,
    semesterRequired: translation.validation.course.semesterRequired,
    gradeRequiredWhenDone: translation.validation.course.gradeRequiredWhenDone,
    gradeOnlyWhenDone: translation.validation.course.gradeOnlyWhenDone,
    gradeRange: translation.validation.course.gradeRange,
  },
});
