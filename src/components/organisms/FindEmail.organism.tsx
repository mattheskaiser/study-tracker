import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Search, UserPlus } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { useEmailSchema } from "@/schemas/schema";

type FormFields = {
  newUser: boolean;
  email: string;
};

type DataTypes = {
  user: {
    id: string;
    email: string;
  };
};

export const FindEmailOrganism = () => {
  const translation = useTranslation();
  const emailSchema = useEmailSchema();
  
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      newUser: false,
    },
    resolver: zodResolver(emailSchema),
  });

  const [userId, setUserId] = useQueryState("userId");
  const [isLoading, setIsLoading] = useState(false);
  const isNewUser = watch("newUser");

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<DataTypes>("/api/user", formData);
      void setUserId(data.user.id);
      toast(
        translation.accountFinderCard.findEmailOrganism.toasts
          .successToastMessage,
        {
          dismissible: true,
          description:
            translation.accountFinderCard.findEmailOrganism.toasts
              .successToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
      setIsLoading(false);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast(
          translation.accountFinderCard.findEmailOrganism.toasts
            .errorToastMessage,
          {
            dismissible: true,
            description:
              translation.accountFinderCard.findEmailOrganism.toasts
                .errorToastDescription,
            position: "top-center",
          },
        );
        setIsLoading(false);
      } else {
        toast(
          translation.accountFinderCard.findEmailOrganism.toasts
            .errorToastMessage,
          {
            dismissible: true,
            description:
              translation.accountFinderCard.findEmailOrganism.toasts
                .otherToastDescription,
            position: "top-center",
          },
        );
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-x-2 gap-y-4 md:flex-row"
    >
      <div className="flex w-full flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder={
              !userId
                ? translation.accountFinderCard.findEmailOrganism.form
                    .emailNotEnteredPlaceholder
                : translation.accountFinderCard.findEmailOrganism.form
                    .emailEnteredPlaceholder
            }
            disabled={!!userId}
          />
          {errors.email && (
            <TextAtom size="small" color="error">
              {errors.email.message}
            </TextAtom>
          )}
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <Controller
            name="newUser"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={!!userId}
              />
            )}
          />
          <TextAtom size="small">
            {translation.accountFinderCard.findEmailOrganism.form.checkboxLabel}
          </TextAtom>
        </div>
      </div>
      <ButtonAtom
        isLoading={isSubmitting}
        disabled={!!userId || isLoading}
        label={
          !isNewUser
            ? translation.accountFinderCard.findEmailOrganism.form
                .searchEmailButton
            : translation.accountFinderCard.findEmailOrganism.form
                .createAccountButton
        }
        type="submit"
      >
        {!isNewUser ? <Search strokeWidth={2} /> : <UserPlus strokeWidth={2} />}
      </ButtonAtom>
    </form>
  );
};
