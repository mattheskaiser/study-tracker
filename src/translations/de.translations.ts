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
    cardTitle: "Finde deine Daten",
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
      },
      form: {
        emailNotEnteredPlaceholder: "E-Mail eingeben...",
        emailEnteredPlaceholder: "E-Mail wurde bereits eingegeben.",
        checkboxLabel: "Ich bin ein neuer Benutzer",
        searchEmailButton: "E-Mail suchen",
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
        successToastMessage: "Kurs erfolgreich erstellt!",
        successToastDescription: "Dein neuer Kurs wurde zur Liste hinzugefügt",
        errorToastMessage: "Kurs konnte nicht erstellt werden",
        errorToastDescription: "Bitte versuche es später erneut.",
      },
      form: {
        courseNamePlaceholder: "Kursname eingeben...",
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
      filterDropdown: {
        filterByStatus: "Nach Status filtern",
        open: "Offen",
        inProgress: "In Bearbeitung",
        done: "Abgeschlossen"
      },
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "Kurs erfolgreich aktualisiert!",
          editSuccessToastDescription: "Deine Änderungen wurden gespeichert",
          editErrorToastMessage: "Kurs konnte nicht aktualisiert werden",
          editErrorToastDescription: "Bitte versuche es später erneut.",
          deleteSuccessToastMessage: "Kurs erfolgreich gelöscht",
          deleteSuccessToastDescription: "Der Kurs wurde dauerhaft entfernt",
          deleteErrorToastMessage: "Kurs konnte nicht gelöscht werden",
          deleteErrorToastDescription: "Bitte versuche es später erneut.",
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
};
