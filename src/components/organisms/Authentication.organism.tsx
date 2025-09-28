import { useState } from "react";
import axios from "axios";
import { useQueryState } from "nuqs";

import { LoggedInUserMolecule } from "@/components/molecules/LoggedInUser.molecule";
import { ModeSelectorMolecule } from "@/components/molecules/ModeSelector.molecule";
import { EmailFormMolecule } from "@/components/molecules/EmailForm.molecule";
import { showToast } from "@/components/atoms/Toast.atom";
import { useTranslation } from "@/hooks/useTranslation.hook";
import type { EmailFormData, ApiUserResponse } from "@/types/email-form.types";

export const AuthenticationOrganism = () => {
  const [userId, setUserId] = useQueryState("userId");
  const [userEmail, setUserEmail] = useQueryState("userEmail");
  const [isLoading, setIsLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const translation = useTranslation();

  const handleSignOut = () => {
    void setUserId(null);
    void setUserEmail(null);
  };

  const handleModeChange = (newUserMode: boolean) => {
    setIsNewUser(newUserMode);
  };

  const handleFormSubmit = async (formData: EmailFormData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<ApiUserResponse>("/api/user", formData);
      void setUserId(data.user.id);
      void setUserEmail(data.user.email);

      showToast({
        type: "success",
        title: translation.accountFinderCard.findEmailOrganism.toasts.successToastMessage,
        description: translation.accountFinderCard.findEmailOrganism.toasts.successToastDescription,
      });
    } catch (error) {
      const errorTitle = translation.accountFinderCard.findEmailOrganism.toasts.errorToastMessage;

      if (axios.isAxiosError(error)) {
        const errorDescription =
          error.response?.data?.error ||
          translation.accountFinderCard.findEmailOrganism.toasts.errorToastDescription;

        showToast({
          type: "error",
          title: errorTitle,
          description: errorDescription,
        });
      } else {
        showToast({
          type: "error",
          title: errorTitle,
          description: translation.accountFinderCard.findEmailOrganism.toasts.otherToastDescription,
        });
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  if (userId && userEmail) {
    return (
      <LoggedInUserMolecule userEmail={userEmail} onSignOut={handleSignOut} />
    );
  }

  return (
    <div className="space-y-6">
      <ModeSelectorMolecule
        isNewUser={isNewUser}
        onModeChange={handleModeChange}
        searchLabel={
          translation.accountFinderCard.findEmailOrganism.form
            .searchEmailButton
        }
        createLabel={
          translation.accountFinderCard.findEmailOrganism.form
            .createAccountButton
        }
      />

      <EmailFormMolecule
        isNewUser={isNewUser}
        isLoading={isLoading}
        onSubmit={handleFormSubmit}
        translation={translation}
      />
    </div>
  );
};
