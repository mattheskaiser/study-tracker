import { cn } from "@/lib/utils";
import type { CourseStatusType } from "@/types/general.types";

type StatusBadgeProps = {
  status: CourseStatusType;
  children: React.ReactNode;
};

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":
            status === "open",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":
            status === "in_progress",
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":
            status === "done",
        },
      )}
    >
      {children}
    </span>
  );
};