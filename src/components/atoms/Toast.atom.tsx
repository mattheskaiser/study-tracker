import { toast } from "sonner";

type ToastType = "success" | "error";

type ToastAtomProps = {
  type: ToastType;
  title: string;
  description: string;
};

export const showToast = ({ type, title, description }: ToastAtomProps) => {
  const baseConfig = {
    dismissible: true,
    description,
    position: "top-center" as const,
  };

  if (type === "success") {
    toast(title, {
      ...baseConfig,
      style: { textDecorationColor: "black" },
    });
  } else {
    toast(title, baseConfig);
  }
};