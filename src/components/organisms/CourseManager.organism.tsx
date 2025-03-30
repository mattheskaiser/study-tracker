import type { ClassValue } from "clsx";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";
import { cn } from "@/lib/utils";

export const CourseManagerOrganism = ({
  className,
}: {
  className?: ClassValue;
}) => {
  return (
    <CardAtom
      className={cn("w-full lg:w-[65%]", className)}
      title={
        <TextAtom size="large" isBold>
          Deine Kurse
        </TextAtom>
      }
      description={
        <TextAtom size="small">
          Füge alle deine Kurse und Noten hinzu, um deinen Studienfortschritt
          genau zu verfolgen.
        </TextAtom>
      }
    />
  );
};
