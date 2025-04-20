import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

type TextAtomProps = {
  children?: string;
  size?: "small" | "medium" | "large";
  isBold?: boolean;
  className?: ClassValue;
  color?: "black" | "white" | "success" | "warning" | "error";
};

export const TextAtom = ({
  children,
  size = "medium",
  isBold = false,
  className,
  color = "black",
}: TextAtomProps) => {
  return (
    <p
      className={cn(
        "",
        {
          "text-sm": size === "small",
          "text-base": size === "medium",
          "text-xl": size === "large",
        },
        {
          "text-black": color === "black",
          "text-white": color === "white",
          "text-green-500": color === "success",
          "text-yellow-500": color === "warning",
          "text-red-500": color === "error",
        },
        {
          "font-bold": isBold,
        },
        className,
      )}
    >
      {children}
    </p>
  );
};
