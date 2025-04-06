import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Search, UserPlus } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

type FormFields = {
  newUser: boolean;
  email: string;
};

export const FindEmailOrganism = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      newUser: false,
    },
  });

  const isNewUser = watch("newUser");

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    try {
      console.log("Folgende Form wurde gesendet:", formData);

      const { data } = await axios.post("/api/user", formData);

      console.log("Antwort vom Server:", data);
      alert(
        !formData.newUser ? "User gefunden!" : "User erfolgreich erstellt!",
      );

      reset();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Fehler:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Etwas ist schiefgelaufen");
      } else {
        console.error("Unbekannter Fehler:", error);
        alert("Etwas ist schiefgelaufen");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-x-6 gap-y-4 md:flex-row"
    >
      <div className="flex w-full flex-col gap-y-4">
        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email eingeben..."
        />
        <div className="flex flex-row items-center gap-x-2">
          <Controller
            name="newUser"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <TextAtom size="small">Ich bin ein neuer Benutzer</TextAtom>
        </div>
      </div>
      <ButtonAtom
        disabled={isSubmitting}
        endContent={
          !isNewUser ? <Search strokeWidth={2} /> : <UserPlus strokeWidth={2} />
        }
        type="submit"
      >
        {!isNewUser ? "Email suchen" : "Account anlegen"}
      </ButtonAtom>
    </form>
  );
};
