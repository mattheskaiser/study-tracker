export const deTranslations = {
  validation: {
    email: {
      required: "Email ist erforderlich",
      invalid: "Ungültige Email"
    },
    course: {
      name: {
        required: "Kursname darf nicht leer sein"
      },
      grade: {
        requiredIfDone: "Note ist erforderlich, wenn der Kurs abgeschlossen ist",
        onlyIfDone: "Note darf nur angegeben werden, wenn der Kurs abgeschlossen ist"
      }
    }
  },
  accountFinderCard: {
    cardTitle: "Konto",
    cardTitleLoggedIn: "Konto",
    cardDescriptionLoginFalse:
      "Suche nach deiner E-Mail, falls du bereits registriert bist. Andernfalls gib deine E-Mail ein, um ein Konto zu erstellen.",
    cardDescriptionLoginTrue:
      "Hinweis: Du bist jetzt mit deinem Konto verbunden und kannst deine Kurse anzeigen und bearbeiten sowie deine Statistiken einsehen.",
    findEmailOrganism: {
      toasts: {
        successToastMessage: "Der Vorgang war erfolgreich!",
        successToastDescription: "Dein Konto wurde gefunden oder erstellt.",
        errorToastMessage: "Leider war der Vorgang nicht erfolgreich.",
        errorToastDescription: "Dein Konto wurde nicht gefunden.",
        otherToastDescription: "Leider ist ein unbekannter Fehler aufgetreten.",
        signOutSuccessToastMessage: "Der Vorgang war erfolgreich!",
        signOutSuccessToastDescription: "Du wurdest von deinem Konto abgemeldet.",
      },
      form: {
        emailNotEnteredPlaceholder: "E-Mail eingeben...",
        emailEnteredPlaceholder: "E-Mail wurde bereits eingegeben.",
        pinPlaceholder: "PIN eingeben...",
        confirmPinPlaceholder: "PIN bestätigen...",
        checkboxLabel: "Ich bin ein neuer Benutzer",
        searchEmailButton: "Anmelden",
        createAccountButton: "Konto erstellen",
      },
      validation: {
        emailNonEmpty: "E-Mail ist erforderlich",
        emailInvalid: "Ungültige E-Mail",
      },
    },
  },
  createCourseCard: {
    title: "Kurserstellung",
    description: "Füge neue Kurse zu deiner Kursliste hinzu"
  },
  courseListCard: {
    title: "Kursliste",
    description: "Liste deiner Kurse - bearbeite sie oder was auch immer"
  },
  common: {
    save: "Speichern",
    selectLanguage: "Sprache",
    languages: {
      english: "Englisch",
      spanish: "Spanisch",
      german: "Deutsch"
    },
    selectSemester: "Semester auswählen",
    semesters: {
      sem1: "1. Semester",
      sem2: "2. Semester",
      sem3: "3. Semester",
      sem4: "4. Semester",
      sem5: "5. Semester",
      sem6: "6. Semester"
    }
  },
  courseManagerCard: {
    cardTitle: "Deine Kurse",
    cardDescription:
      "Füge alle deine Kurse und Noten hinzu, um deinen Studienfortschritt genau zu verfolgen.",
    cardNoteLoginFalse:
      "Hinweis: Bitte melde dich an, um Kurse anzusehen und hinzuzufügen.",
    createCourseOrganism: {
      toasts: {
        successToastMessage: "Der Kurs wurde erfolgreich erstellt!",
        successToastDescription: "Dein Kurs wurde zur Liste hinzugefügt.",
        errorToastMessage: "Der Vorgang war leider nicht erfolgreich.",
        errorToastDescription: "Der Kurs konnte leider nicht erstellt werden.",
      },
      form: {
        courseNamePlaceholder: "Kursname eingeben...",
        semesterPlaceholder: "Semester auswählen",
        courseStatusPlaceholder: "Status auswählen",
        courseStatusOpen: "Offen",
        courseStatusInProgress: "In Bearbeitung",
        courseStatusDone: "Abgeschlossen",
        courseGradePlaceholder: "Note eingeben...",
        buttonLabel: "Kurs hinzufügen",
      },
    },
    courseListOrganism: {
      errorMessage: "Deine Kurse konnten leider nicht geladen werden.",
      noCoursesAddedNote: "Hinweis: Du hast noch keine Kurse hinzugefügt.",
      buttonLabelCollapse: "Kurse einklappen",
      buttonLabelShowAll: "Alle Kurse anzeigen",
      filterByStatus: "Nach Status filtern",
      boardTitle: "Kurs-Board",
      totalCourses: "gesamt",
      viewTabs: {
        status: "Status",
        semester: "Semester",
      },
      semesterLabels: {
        sem1: "1. Semester",
        sem2: "2. Semester",
        sem3: "3. Semester",
        sem4: "4. Semester",
        sem5: "5. Semester",
        sem6: "6. Semester",
      },
      emptyState: "Keine Kurse",
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "Dein Kurs wurde erfolgreich angepasst!",
          editSuccessToastDescription: "Deine Änderungen wurden gespeichert.",
          editErrorToastMessage: "Der Vorgang war leider nicht erfolgreich.",
          editErrorToastDescription:
            "Der Kurs konnte leider nicht bearbeitet werden.",
          deleteSuccessToastMessage: "Der Kurs wurde erfolgreich gelöscht.",
          deleteSuccessToastDescription: "Der Kurs wurde aus deiner Liste entfernt.",
          deleteErrorToastMessage: "Der Vorgang war leider nicht erfolgreich.",
          deleteErrorToastDescription:
            "Der Kurs konnte leider nicht gelöscht werden.",
        },
        courseStatusOpen: "Offen",
        courseStatusInProgress: "In Bearbeitung",
        courseStatusDone: "Abgeschlossen",
        selectStatusPlaceholder: "Status auswählen",
        status: "Status",
        grade: "Note",
        dropdown: {
          edit: "Bearbeiten",
          delete: "Löschen",
        },
      },
    },
  },
  overviewCard: {
    cardTitle: "Überblick",
    cardDescription: "Dein Studium auf einen Blick.",
    cardNote:
      "Hinweis: Bitte melde dich an, um auf deine Statistiken zuzugreifen.",
    openCourses: "Offene Kurse",
    finishedCourses: "Abgeschlossene Kurse",
    gradeAverage: "Notendurchschnitt",
    progress: "Fortschritt",
  },
  createCourseCard: {
    cardTitle: "Kurserstellung",
    cardDescription: "Füge neue Kurse zu deiner Kursliste hinzu",
  },
  courseListCard: {
    cardTitle: "Kurs-Board",
    cardDescription: "Verwalte deine Kurse mit Status- und Semester-Ansichten",
  },
  validation: {
    email: {
      required: "E-Mail ist erforderlich",
      invalid: "Ungültige E-Mail",
    },
    pin: {
      required: "PIN ist erforderlich",
      minLength: "PIN muss mindestens 4 Ziffern haben",
      maxLength: "PIN darf höchstens 6 Ziffern haben",
      numbersOnly: "PIN darf nur Zahlen enthalten",
      confirmMatch: "PIN-Bestätigung muss übereinstimmen",
    },
    course: {
      nameRequired: "Kursname darf nicht leer sein",
      semesterRequired: "Semester-Auswahl ist erforderlich",
      gradeRequiredWhenDone: "Note ist erforderlich, wenn der Kurs abgeschlossen ist",
      gradeOnlyWhenDone: "Note darf nur angegeben werden, wenn der Kurs abgeschlossen ist",
      gradeRange: "Note muss zwischen 1 und 6 liegen",
    },
  },
};
