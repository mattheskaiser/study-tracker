"use client";

import type { ReactNode } from "react";
import type { ClassValue } from "clsx";
import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonAtomProps = {
  children: ReactNode;
  label?: ReactNode;
  onPress?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: ClassValue;
  isLoading?: boolean;
};

export const ButtonAtom = ({
  children,
  onPress,
  type,
  disabled,
  className,
  isLoading,
}: ButtonAtomProps) => {
  return (
    <Button
      type={type}
      disabled={disabled || isLoading}
      onClick={onPress}
      className={cn(className)}
    >
      {!isLoading ? children : <Loader2Icon className="animate-spin" />}
    </Button>
  );
};
