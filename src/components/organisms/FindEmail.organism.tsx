import { useMemo, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { LogIn, Search, UserPlus } from "lucide-react";
import { useQueryState } from "nuqs";
import { toast } from "sonner";
import type { z } from "zod";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { LoggedInUserMolecule } from "@/components/molecules/LoggedInUser.molecule";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/hooks/useTranslation.hook";
import { createEmailSchema } from "@/schemas/dynamicSchemas";
import { getValidationMessages } from "@/utils/validation.utils";

type DataTypes = {
  user: {
    id: string;
    email: string;
  };
};

type ModeTabProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

const ModeTab = ({ active, onClick, icon, label }: ModeTabProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${active
        ? "bg-gray-900 text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      {icon}
      {label}
    </button>
  );
};

export const FindEmailOrganism = () => {
  const [userId, setUserId] = useQueryState("userId");
  const [userEmail, setUserEmail] = useQueryState("userEmail");
  const [isLoading, setIsLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const translation = useTranslation();

  const handleSignOut = () => {
    void setUserId(null);
    void setUserEmail(null);
  };

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
      newUser: false,
    },
    resolver: zodResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<DataTypes>("/api/user", formData);
      void setUserId(data.user.id);
      void setUserEmail(data.user.email);
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
        const errorMessage = error.response?.data?.error || translation.accountFinderCard.findEmailOrganism.toasts.errorToastDescription;
        toast(
          translation.accountFinderCard.findEmailOrganism.toasts
            .errorToastMessage,
          {
            dismissible: true,
            description: errorMessage,
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

  // If user is logged in, show the logged-in state
  if (userId && userEmail) {
    return (
      <LoggedInUserMolecule
        userEmail={userEmail}
        onSignOut={handleSignOut}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Mode Selection Buttons */}
      <div className="flex gap-2">
        <ModeTab
          active={!isNewUser}
          onClick={() => {
            setIsNewUser(false);
            setValue("newUser", false);
          }}
          icon={<LogIn className="h-4 w-4" />}
          label={translation.accountFinderCard.findEmailOrganism.form.searchEmailButton}
        />
        <ModeTab
          active={isNewUser}
          onClick={() => {
            setIsNewUser(true);
            setValue("newUser", true);
          }}
          icon={<UserPlus className="h-4 w-4" />}
          label={translation.accountFinderCard.findEmailOrganism.form.createAccountButton}
        />
      </div>

      {/* Form */}
      <form
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >
        {/* All inputs in one row */}
        <div className="flex gap-2 items-start">
          {/* Email Input - Takes more space */}
          <div className="flex-[2] min-w-0">
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder={
                translation.accountFinderCard.findEmailOrganism.form
                  .emailNotEnteredPlaceholder
              }
            />
          </div>

          {/* PIN Input */}
          <div className="flex-1 min-w-0">
            <Input
              {...register("pin", { required: true })}
              type="password"
              placeholder={translation.accountFinderCard.findEmailOrganism.form.pinPlaceholder}
              maxLength={6}
              className="text-center"
            />
          </div>

          {/* Confirm PIN Input - Only show for new users */}
          {isNewUser && (
            <div className="flex-1 min-w-0">
              <Input
                {...register("confirmPin")}
                type="password"
                placeholder={translation.accountFinderCard.findEmailOrganism.form.confirmPinPlaceholder}
                maxLength={6}
                className="text-center"
              />
            </div>
          )}

          {/* Submit Button */}
          <ButtonAtom
            isLoading={isSubmitting}
            disabled={isLoading}
            type="submit"
          >
            {!isNewUser ? <Search strokeWidth={2} /> : <UserPlus strokeWidth={2} />}
          </ButtonAtom>
        </div>

        {/* Error messages */}
        {(errors.email || errors.pin || errors.confirmPin) && (
          <div className="flex gap-2">
            <div className="flex-[2] min-w-0">
              {errors.email && (
                <TextAtom size="small" color="error">
                  {errors.email.message}
                </TextAtom>
              )}
            </div>
            <div className="flex-1 min-w-0">
              {errors.pin && (
                <TextAtom size="small" color="error">
                  {errors.pin.message}
                </TextAtom>
              )}
            </div>
            {isNewUser && (
              <div className="flex-1 min-w-0">
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
    </div>
  );
};
