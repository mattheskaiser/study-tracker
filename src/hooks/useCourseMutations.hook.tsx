import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useQueryState } from "nuqs";
import { toast } from "sonner";

import { useTranslation } from "@/hooks/useTranslation.hook";

type CreateCourseData = {
  name: string;
  semester: string;
  status: string;
  grade?: number;
};

type UpdateCourseData = {
  courseId: string;
  status: string;
  grade?: number;
};

export const useCourseMutations = () => {
  const queryClient = useQueryClient();
  const [userId] = useQueryState("userId");
  const translation = useTranslation();

  const createCourseMutation = useMutation({
    mutationFn: async (courseData: CreateCourseData) => {
      const response = await axios.post("/api/courses", {
        ...courseData,
        userId,
      });
      return response.data as unknown;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["courses", userId] });
      toast(
        translation.courseManagerCard.createCourseOrganism.toasts
          .successToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.createCourseOrganism.toasts
              .successToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    },
    onError: () => {
      toast(
        translation.courseManagerCard.createCourseOrganism.toasts
          .errorToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.createCourseOrganism.toasts
              .errorToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    },
  });

  const updateCourseMutation = useMutation({
    mutationFn: async (updateData: UpdateCourseData) => {
      const response = await axios.patch("/api/courses", updateData);
      return response.data as unknown;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["courses", userId] });
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.editSuccessToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.editSuccessToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    },
    onError: () => {
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.editErrorToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.editErrorToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    },
  });

  const deleteCourseMutation = useMutation({
    mutationFn: async (courseId: string) => {
      const response = await fetch(`/api/courses?courseId=${courseId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete course");
      }
      return (await response.json()) as unknown;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["courses", userId] });
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.deleteSuccessToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.deleteSuccessToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    },
    onError: () => {
      toast(
        translation.courseManagerCard.courseListOrganism.courseTabOrganism
          .toasts.deleteErrorToastMessage,
        {
          dismissible: true,
          description:
            translation.courseManagerCard.courseListOrganism.courseTabOrganism
              .toasts.deleteErrorToastDescription,
          style: { textDecorationColor: "black" },
          position: "top-center",
        },
      );
    },
  });

  return {
    createCourse: createCourseMutation,
    updateCourse: updateCourseMutation,
    deleteCourse: deleteCourseMutation,
  };
};
