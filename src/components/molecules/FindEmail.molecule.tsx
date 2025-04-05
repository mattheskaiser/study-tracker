import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { Input } from "@/components/ui/input";

type FormFields = {
  email: string;
};

export const FindEmailMolecule = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-row gap-x-6"
    >
      <Input
        {...register("email")}
        type="email"
        placeholder="Email eingeben..."
      />
      <ButtonAtom
        disabled={isSubmitting}
        endContent={<Search strokeWidth={2} />}
        type="submit"
      >
        {isSubmitting ? "Wird gesucht..." : "Email suchen"}
      </ButtonAtom>
    </form>
  );
};
