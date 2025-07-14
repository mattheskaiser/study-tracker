import { useTranslation } from "@/hooks/useTranslation.hook";

// used in CreateCourse.organism.tsx
export const useSelectSemesterItems = () => {
  const translation = useTranslation();
  
  return [
    { value: "sem1", children: translation.common.semesters.sem1 },
    { value: "sem2", children: translation.common.semesters.sem2 },
    { value: "sem3", children: translation.common.semesters.sem3 },
    { value: "sem4", children: translation.common.semesters.sem4 },
    { value: "sem5", children: translation.common.semesters.sem5 },
    { value: "sem6", children: translation.common.semesters.sem6 },
  ];
};
