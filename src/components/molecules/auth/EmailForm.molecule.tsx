import { useEffect, useMemo } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, UserPlus } from "lucide-react";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Input } from "@/components/ui/input";
import { createEmailSchema } from "@/schemas/dynamicSchemas";
import type { EmailFormData } from "@/types/email-form.types";
import { getValidationMessages } from "@/utils/validation.utils";
import type { enTranslations } from "@/translations/en.translations";

type EmailFormProps = {
  isNewUser: boolean;
  isLoading: boolean;
  onSubmit: (data: EmailFormData) => Promise<void>;
  translation: typeof enTranslations;
};

export const EmailFormMolecule = ({
  isNewUser,
  isLoading,
  onSubmit,
  translation,
}: EmailFormProps) => {
  const validationMessages = useMemo(
    () => getValidationMessages(translation),
    [translation],
  );

  const emailSchema = useMemo(
    () => createEmailSchema(validationMessages),
    [validationMessages],
  );

  type FormFields = z.infer<typeof emailSchema>;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      pin: "",
      confirmPin: "",
      newUser: isNewUser,
    },
    resolver: zodResolver(emailSchema),
  });

  useEffect(() => {
    setValue("newUser", isNewUser);
  }, [isNewUser, setValue]);

  const handleFormSubmit: SubmitHandler<FormFields> = async (formData) => {
    const submitData: EmailFormData = {
      email: formData.email,
      pin: formData.pin,
      confirmPin: formData.confirmPin || "",
      newUser: isNewUser,
    };

    try {
      await onSubmit(submitData);
      reset();
    } catch {
      // Error handling is done in the parent component
    }
  };

  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(handleFormSubmit)(e);
      }}
      className="space-y-2"
    >
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-[2]">
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder={
              translation.accountFinderCard.findEmailOrganism.form
                .emailNotEnteredPlaceholder
            }
          />
        </div>

        <div className="min-w-0 flex-1">
          <Input
            {...register("pin", { required: true })}
            type="password"
            placeholder={
              translation.accountFinderCard.findEmailOrganism.form
                .pinPlaceholder
            }
            maxLength={6}
            className="text-center"
          />
        </div>

        {isNewUser && (
          <div className="min-w-0 flex-1">
            <Input
              {...register("confirmPin")}
              type="password"
              placeholder={
                translation.accountFinderCard.findEmailOrganism.form
                  .confirmPinPlaceholder
              }
              maxLength={6}
              className="text-center"
            />
          </div>
        )}

        <ButtonAtom isLoading={isSubmitting} disabled={isLoading} type="submit">
          {!isNewUser ? (
            <Search strokeWidth={2} />
          ) : (
            <UserPlus strokeWidth={2} />
          )}
        </ButtonAtom>
      </div>

      {(errors.email || errors.pin || errors.confirmPin) && (
        <div className="flex gap-2">
          <div className="min-w-0 flex-[2]">
            {errors.email && (
              <TextAtom size="small" color="error">
                {errors.email.message}
              </TextAtom>
            )}
          </div>
          <div className="min-w-0 flex-1">
            {errors.pin && (
              <TextAtom size="small" color="error">
                {errors.pin.message}
              </TextAtom>
            )}
          </div>
          {isNewUser && (
            <div className="min-w-0 flex-1">
              {errors.confirmPin && (
                <TextAtom size="small" color="error">
                  {errors.confirmPin.message}
                </TextAtom>
              )}
            </div>
          )}
          <div className="w-10"></div>
        </div>
      )}
    </form>
  );
};
