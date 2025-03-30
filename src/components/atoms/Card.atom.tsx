import type { ReactNode } from "react";
import type { ClassValue } from "clsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardAtomProps = {
  title: ReactNode | string;
  description?: ReactNode | string;
  content?: ReactNode;
  footer?: ReactNode | string;
  className?: ClassValue;
};

export const CardAtom = ({
  title,
  description,
  content,
  footer,
  className,
}: CardAtomProps) => {
  return (
    <Card className={cn("border-2 shadow-xl", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
