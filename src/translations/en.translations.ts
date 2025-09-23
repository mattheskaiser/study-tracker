export const enTranslations = {
  accountFinderCard: {
    cardTitle: "Account",
    cardTitleLoggedIn: "Account",
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
        signOutSuccessToastMessage: "The process was successful!",
        signOutSuccessToastDescription: "You have been logged out of your account.",
      },
      loggedInUser: {
        loggedInAs: "Logged in as",
      },
      form: {
        emailNotEnteredPlaceholder: "Enter email...",
        emailEnteredPlaceholder: "Email has already been entered.",
        pinPlaceholder: "Enter PIN...",
        confirmPinPlaceholder: "Confirm PIN...",
        checkboxLabel: "I'm a new user",
        searchEmailButton: "Sign in",
        createAccountButton: "Create account",
      },
      validation: {
        emailNonEmpty: "Email is required",
        emailInvalid: "Invalid email",
      },
    },
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
        successToastMessage: "The course was successfully created!",
        successToastDescription: "Your course has been added to the list.",
        errorToastMessage: "Unfortunately, the process was not successful.",
        errorToastDescription: "The course could not be created.",
      },
      form: {
        courseNamePlaceholder: "Enter course name...",
        semesterPlaceholder: "Select semester",
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
      filterByStatus: "Filter by status",
      boardTitle: "Course Board",
      totalCourses: "total",
      viewTabs: {
        status: "Status",
        semester: "Semester",
      },
      semesterLabels: {
        sem1: "1st Semester",
        sem2: "2nd Semester",
        sem3: "3rd Semester",
        sem4: "4th Semester",
        sem5: "5th Semester",
        sem6: "6th Semester",
      },
      emptyState: "No courses",
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "Your course was successfully updated!",
          editSuccessToastDescription: "Your changes have been saved.",
          editErrorToastMessage:
            "The operation was unfortunately not successful.",
          editErrorToastDescription: "The course could not be edited.",
          deleteSuccessToastMessage: "The course was successfully deleted.",
          deleteSuccessToastDescription: "The course has been removed from your list.",
          deleteErrorToastMessage:
            "The operation was unfortunately not successful.",
          deleteErrorToastDescription: "The course could not be deleted.",
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
  createCourseCard: {
    cardTitle: "Course Creation",
    cardDescription: "Add new courses to your course list",
  },
  courseListCard: {
    cardTitle: "Course Board",
    cardDescription: "Manage your courses with status and semester views",
  },
  validation: {
    email: {
      required: "Email is required",
      invalid: "Invalid email",
    },
    pin: {
      required: "PIN is required",
      minLength: "PIN must be at least 4 digits",
      maxLength: "PIN must be at most 6 digits",
      numbersOnly: "PIN must contain only numbers",
      confirmMatch: "PIN confirmation must match",
      confirmRequired: "Please confirm your PIN",
    },
    course: {
      nameRequired: "Course name cannot be empty",
      semesterRequired: "Semester selection is required",
      gradeRequiredWhenDone: "Grade is required when the course is completed",
      gradeOnlyWhenDone: "Grade can only be provided when the course is completed",
      gradeRange: "Grade must be between 1 and 6",
    },
  },
};
