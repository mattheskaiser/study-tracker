import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

type TextAtomProps = {
  children?: string;
  size?: "small" | "medium" | "large";
  isBold?: boolean;
  className?: ClassValue;
};

export const TextAtom = ({
  children,
  size = "medium",
  isBold = false,
  className,
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
          "font-bold": isBold,
        },
        className,
      )}
    >
      {children}
    </p>
  );
};
