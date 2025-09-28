type SemesterLabels = {
  sem1: string;
  sem2: string;
  sem3: string;
  sem4: string;
  sem5: string;
  sem6: string;
};

export const formatSemester = (
  semester: string,
  labels: SemesterLabels,
): string => {
  return labels[semester as keyof SemesterLabels] || semester;
};

export const formatSemesterShort = (semester: string): string => {
  const semesterMap: Record<string, string> = {
    sem1: "S1",
    sem2: "S2",
    sem3: "S3",
    sem4: "S4",
    sem5: "S5",
    sem6: "S6",
  };

  return semesterMap[semester] || semester;
};
