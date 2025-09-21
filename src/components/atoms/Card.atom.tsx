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
  title?: ReactNode | string;
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
    <Card className={cn("border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white rounded-2xl", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">{content}</CardContent>
      {footer && <CardFooter className="pt-4">{footer}</CardFooter>}
    </Card>
  );
};
