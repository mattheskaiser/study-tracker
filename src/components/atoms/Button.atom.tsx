"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type ButtonAtomProps = {
  children: string;
  onPress: () => void;
  isIconOnly?: boolean;
  icon?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
};

export const ButtonAtom = ({
  children,
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
      {children}
      {endContent}
    </Button>
  );
};
