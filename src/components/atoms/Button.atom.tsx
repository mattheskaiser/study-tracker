"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type ButtonAtomProps = {
  children?: string;
  onPress?: () => void;
  isIconOnly?: boolean;
  icon?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
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
}: ButtonAtomProps) => {
  return isIconOnly ? (
    <Button type={type} disabled={disabled} onClick={onPress}>
      {icon}
    </Button>
  ) : (
    <Button
      disabled={disabled}
      type={type}
      onClick={onPress}
      className="flex flex-row items-center justify-center text-base hover:cursor-pointer"
    >
      {startContent}
      {children}
      {endContent}
    </Button>
  );
};
