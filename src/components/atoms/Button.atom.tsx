"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type ButtonAtomProps = {
  label: string;
  onPress: () => void;
  isIconOnly?: boolean;
  icon?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
};

export const ButtonAtom = ({
  label,
  onPress,
  isIconOnly,
  icon,
  startContent,
  endContent,
}: ButtonAtomProps) => {
  return isIconOnly ? (
    <Button>{icon}</Button>
  ) : (
    <Button
      onClick={onPress}
      className="flex flex-row items-center justify-center text-base"
    >
      {startContent}
      {label}
      {endContent}
    </Button>
  );
};
