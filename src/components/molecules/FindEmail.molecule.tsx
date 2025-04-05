import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Search, UserPlus } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

type FormFields = {
  newUser: boolean;
  email: string;
};

export const FindEmailMolecule = () => {
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

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-row gap-x-6"
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
