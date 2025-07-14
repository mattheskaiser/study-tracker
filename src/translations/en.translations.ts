export const enTranslations = {
  validation: {
    email: {
      required: "Email is required",
      invalid: "Invalid email"
    },
    course: {
      name: {
        required: "Course name cannot be empty"
      },
      grade: {
        requiredIfDone: "Grade is required when the course is completed",
        onlyIfDone: "Grade can only be set when the course is completed"
      }
    }
  },
  accountFinderCard: {
    cardTitle: "Find your data",
    cardDescriptionLoginFalse:
      "Search for your email in case you're already registered. Otherwise, enter your email to create an account.",
    cardDescriptionLoginTrue:
      "Note: You are now connected to your account and can view and edit your courses and view your statistics.",
    findEmailOrganism: {
      toasts: {
        successToastMessage: "The process was successful!",
        successToastDescription: "Your account was found or created.",
        errorToastMessage: "Unfortunately, the process was not successful.",
        errorToastDescription: "Your account was not found.",
        otherToastDescription: "Unfortunately, an unknown error occurred.",
      },
      form: {
        emailNotEnteredPlaceholder: "Enter email...",
        emailEnteredPlaceholder: "Email has already been entered.",
        checkboxLabel: "I'm a new user",
        searchEmailButton: "Search email",
        createAccountButton: "Create account",
      },
      validation: {
        emailNonEmpty: "Email is required",
        emailInvalid: "Invalid email",
      },
    },
  },
  createCourseCard: {
    title: "Course Creation",
    description: "Add new courses to your course list"
  },
  courseListCard: {
    title: "Course List",
    description: "List of your courses - edit them or whatever you need"
  },
  common: {
    save: "Save",
    selectLanguage: "Language",
    languages: {
      english: "English",
      spanish: "Spanish",
      german: "German"
    },
    selectSemester: "Select semester",
    semesters: {
      sem1: "1st Semester",
      sem2: "2nd Semester",
      sem3: "3rd Semester",
      sem4: "4th Semester",
      sem5: "5th Semester",
      sem6: "6th Semester"
    }
  },
  courseManagerCard: {
    cardTitle: "Your Courses",
    cardDescription:
      "Add all your courses and grades to track your academic progress accurately.",
    cardNoteLoginFalse: "Note: Please log in to view and add courses.",
    createCourseOrganism: {
      toasts: {
        successToastMessage: "Course created successfully!",
        successToastDescription: "Your new course has been added to your list",
        errorToastMessage: "Failed to create course",
        errorToastDescription: "Please try again later.",
      },
      form: {
        courseNamePlaceholder: "Enter course name...",
        courseStatusPlaceholder: "Select status",
        courseStatusOpen: "Open",
        courseStatusInProgress: "In progress",
        courseStatusDone: "Completed",
        courseGradePlaceholder: "Enter grade...",
        buttonLabel: "Add course",
      },
    },
    courseListOrganism: {
      errorMessage: "Unfortunately, your courses could not be loaded.",
      noCoursesAddedNote: "Note: You haven't added any courses yet.",
      buttonLabelCollapse: "Collapse courses",
      buttonLabelShowAll: "Show all courses",
      filterDropdown: {
        filterByStatus: "Filter by status",
        open: "Open",
        inProgress: "In progress",
        done: "Completed"
      },
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "Course updated successfully!",
          editSuccessToastDescription: "Your changes have been saved",
          editErrorToastMessage: "Failed to update course",
          editErrorToastDescription: "Please try again later.",
          deleteSuccessToastMessage: "Course deleted successfully",
          deleteSuccessToastDescription: "The course has been permanently removed",
          deleteErrorToastMessage: "Failed to delete course",
          deleteErrorToastDescription: "Please try again later.",
        },
        courseStatusOpen: "Open",
        courseStatusInProgress: "In Progress",
        courseStatusDone: "Completed",
        selectStatusPlaceholder: "Select status",
        status: "Status",
        grade: "Grade",
        dropdown: {
          edit: "Edit",
          delete: "Delete",
        },
      },
    },
  },
  overviewCard: {
    cardTitle: "Overview",
    cardDescription: "Your studies at a glance.",
    cardNote: "Note: Please log in to access your statistics.",
    openCourses: "Open Courses",
    finishedCourses: "Completed Courses",
    gradeAverage: "Grade Average",
    progress: "Progress",
  },
};
