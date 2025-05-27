import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";

import type { CoursesType } from "@/types/general.types";

export const useCourses = () => {
  const [userId] = useQueryState("userId");
  const [statusFilter] = useQueryState("statusFilter");

  const { data, isPending, error } = useQuery<CoursesType>({
    queryKey: ["courses", userId],
    queryFn: () =>
      fetch(`/api/courses?userId=${userId}`).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      }),
    enabled: !!userId,
  });

  const filteredCourses = useMemo(() => {
    if (!data?.courses) return [];

    switch (statusFilter) {
      case "open":
        return data.courses.filter((c) => c.status === "open");
      case "inProgress":
        return data.courses.filter((c) => c.status === "in_progress");
      case "done":
        return data.courses.filter((c) => c.status === "done");
      default:
        return data.courses;
    }
  }, [data, statusFilter]);

  return {
    courses: filteredCourses,
    isPending,
    error,
  };
};
