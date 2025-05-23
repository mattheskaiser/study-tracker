"use client";

import type { ReactNode } from "react";
import type { ClassValue } from "clsx";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonAtomProps = {
  children?: ReactNode;
  onPress?: () => void;
  isIconOnly?: boolean;
  icon?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: ClassValue;
};

export const ButtonAtom = ({
  children,
  onPress,
  isIconOnly,
  icon,
  startContent,
  endContent,
  type,
  disabled,
  className,
}: ButtonAtomProps) => {
  return isIconOnly ? (
    <Button
      type={type}
      disabled={disabled}
      onClick={onPress}
      className={cn("", className)}
    >
      {icon}
    </Button>
  ) : (
    <Button
      disabled={disabled}
      type={type}
      onClick={onPress}
      className={cn(
        "flex flex-row items-center justify-center text-base hover:cursor-pointer",
        className,
      )}
    >
      {startContent}
      {children}
      {endContent}
    </Button>
  );
};
