import type { ReactNode } from "react";
import type { ClassValue } from "clsx";

import { TextAtom } from "@/components/atoms/Text.atom";
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
  title: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode | string;
  className?: ClassValue;
};

export const CardMolecule = ({
  title,
  description,
  content,
  footer,
  className,
}: CardAtomProps) => {
  return (
    <Card
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardHeader className={description ? "pb-4" : "pb-2"}>
        <CardTitle className="text-xl font-semibold text-gray-900">
          <TextAtom size="large" isBold>
            {title}
          </TextAtom>
        </CardTitle>
        {description && (
          <CardDescription>
            <TextAtom size="small" className="text-gray-600">
              {description}
            </TextAtom>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0">{content}</CardContent>
      {footer && <CardFooter className="pt-4">{footer}</CardFooter>}
    </Card>
  );
};
