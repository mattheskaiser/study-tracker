export const deTranslations = {
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
  courseManagerCard: {
    cardTitle: "Deine Kurse",
    cardDescription:
      "Füge alle deine Kurse und Noten hinzu, um deinen Studienfortschritt genau zu verfolgen.",
    cardNoteLoginFalse:
      "Hinweis: Bitte melde dich an, um Kurse anzusehen und hinzuzufügen.",
    createCourseOrganism: {
      toasts: {
        successToastMessage: "Der Kurse wurde erfolgreich erstellt!",
        successToastDescription:
          "Bitte aktualisiere die Seite, um deine Änderungen zu sehen.",
        errorToastMessage: "Der Vorgang war leider nicht erfolgreich.",
        errorToastDescription: "Der Kurs konnte leider nicht erstellt werden.",
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
      courseTabOrganism: {},
    },
  },
};
