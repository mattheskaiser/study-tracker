import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Search, UserPlus } from "lucide-react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { toast } from "sonner";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

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
  const { register, handleSubmit, control, watch, reset } = useForm<FormFields>(
    {
      defaultValues: {
        email: "",
        newUser: false,
      },
    },
  );

  const [userId, setUserId] = useQueryState("userId");
  const [isLoading, setIsLoading] = useState(false);
  const isNewUser = watch("newUser");

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<DataTypes>("/api/user", formData);
      void setUserId(data.user.id);
      toast("Der Vorgang war erfolgreich!", {
        dismissible: true,
        description: "Dein Account konnte gefunden oder erstellt werden.",
        style: { textDecorationColor: "black" },
        position: "top-center",
      });
      setIsLoading(false);
      reset();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Fehler:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Etwas ist schiefgelaufen");
        setIsLoading(false);
      } else {
        console.error("Unbekannter Fehler:", error);
        alert("Etwas ist schiefgelaufen");
        setIsLoading(false);
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
          placeholder={
            !userId ? "Email eingeben..." : "Email wurde bereits angegeben"
          }
          disabled={!!userId}
        />
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
          <TextAtom size="small">Ich bin ein neuer Benutzer</TextAtom>
        </div>
      </div>
      <ButtonAtom
        disabled={!!userId || isLoading}
        endContent={
          isLoading ? (
            <div className="relative size-[24px]">
              <Image
                fill
                src={"/spinner.gif"}
                alt="loading spinner"
                className="object-cover"
              />
            </div>
          ) : !isNewUser ? (
            <Search strokeWidth={2} />
          ) : (
            <UserPlus strokeWidth={2} />
          )
        }
        type="submit"
      >
        {!isNewUser ? "Email suchen" : "Account anlegen"}
      </ButtonAtom>
    </form>
  );
};
