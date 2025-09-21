export const formatSemester = (semester: string): string => {
  const semesterMap: Record<string, string> = {
    sem1: "1st Semester",
    sem2: "2nd Semester", 
    sem3: "3rd Semester",
    sem4: "4th Semester",
    sem5: "5th Semester",
    sem6: "6th Semester",
  };
  
  return semesterMap[semester] || semester;
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