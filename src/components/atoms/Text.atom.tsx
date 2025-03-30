import { cn } from "@/lib/utils";

type TextAtomProps = {
  children: string;
  size: "small" | "medium" | "large";
};

export const TextAtom = ({ children, size = "medium" }: TextAtomProps) => {
  return (
    <p
      className={cn("", {
        "text-sm": size === "small",
        "text-base": size === "medium",
        "text-xl": size === "large",
      })}
    >
      {children}
    </p>
  );
};
