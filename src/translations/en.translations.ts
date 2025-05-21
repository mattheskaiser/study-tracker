export const enTranslations = {
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
  courseManagerCard: {
    cardTitle: "Your Courses",
    cardDescription:
      "Add all your courses and grades to track your academic progress accurately.",
    cardNoteLoginFalse: "Note: Please log in to view and add courses.",
    createCourseOrganism: {
      toasts: {
        successToastMessage: "The course was successfully created!",
        successToastDescription: "Please refresh the page to see your changes.",
        errorToastMessage: "Unfortunately, the process was not successful.",
        errorToastDescription: "The course could not be created.",
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
    },
  },
};
