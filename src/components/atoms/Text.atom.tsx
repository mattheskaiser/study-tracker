import { cn } from "@/lib/utils";

type TextAtomProps = {
  children: string;
  size?: "small" | "medium" | "large";
  isBold?: boolean;
};

export const TextAtom = ({
  children,
  size = "medium",
  isBold = false,
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
      )}
    >
      {children}
    </p>
  );
};
