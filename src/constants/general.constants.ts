import { useTranslation } from "@/hooks/useTranslation.hook";

// used in CreateCourse.organism.tsx
export const useSelectSemesterItems = () => {
  const translation = useTranslation();

  return [
    {
      value: "sem1",
      children:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem1,
    },
    {
      value: "sem2",
      children:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem2,
    },
    {
      value: "sem3",
      children:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem3,
    },
    {
      value: "sem4",
      children:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem4,
    },
    {
      value: "sem5",
      children:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem5,
    },
    {
      value: "sem6",
      children:
        translation.courseManagerCard.courseListOrganism.semesterLabels.sem6,
    },
  ];
};
