export const enTranslations = {
  accountFinderCard: {
    cardTitle: "Find your data",
    cardDescriptionLoginFalse:
      "Search for your email, in case you're already registered. Otherwise enter your email to create an account.",
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
        emailEnteredPlaceholder: "Email was already entered.",
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
};
