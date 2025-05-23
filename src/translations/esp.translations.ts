export const espTranslations = {
  accountFinderCard: {
    cardTitle: "Encuentra tus datos",
    cardDescriptionLoginFalse:
      "Busca tu correo electrónico en caso de que ya estés registrado. De lo contrario, introduce tu correo para crear una cuenta.",
    cardDescriptionLoginTrue:
      "Nota: Ahora estás conectado a tu cuenta y puedes ver y editar tus cursos, así como consultar tus estadísticas.",
    findEmailOrganism: {
      toasts: {
        successToastMessage: "¡El proceso fue exitoso!",
        successToastDescription: "Tu cuenta fue encontrada o creada.",
        errorToastMessage: "Desafortunadamente, el proceso no fue exitoso.",
        errorToastDescription: "No se encontró tu cuenta.",
        otherToastDescription:
          "Desafortunadamente, ocurrió un error desconocido.",
      },
      form: {
        emailNotEnteredPlaceholder: "Ingresa el correo...",
        emailEnteredPlaceholder: "El correo ya fue ingresado.",
        checkboxLabel: "Soy un usuario nuevo",
        searchEmailButton: "Buscar correo",
        createAccountButton: "Crear cuenta",
      },
      validation: {
        emailNonEmpty: "El correo es obligatorio",
        emailInvalid: "Correo electrónico no válido",
      },
    },
  },
  courseManagerCard: {
    cardTitle: "Tus Cursos",
    cardDescription:
      "Agrega todos tus cursos y calificaciones para seguir tu progreso académico con precisión.",
    cardNoteLoginFalse:
      "Nota: Por favor inicia sesión para ver y agregar cursos.",
    createCourseOrganism: {
      toasts: {
        successToastMessage: "¡El curso fue creado con éxito!",
        successToastDescription:
          "Por favor actualiza la página para ver los cambios.",
        errorToastMessage: "Desafortunadamente, el proceso no fue exitoso.",
        errorToastDescription: "No se pudo crear el curso.",
      },
      form: {
        courseNamePlaceholder: "Introduce el nombre del curso...",
        courseStatusPlaceholder: "Seleccionar estado",
        courseStatusOpen: "Abierto",
        courseStatusInProgress: "En progreso",
        courseStatusDone: "Completado",
        courseGradePlaceholder: "Introduce la calificación...",
        buttonLabel: "Agregar curso",
      },
    },
    courseListOrganism: {
      errorMessage: "Desafortunadamente, no se pudieron cargar tus cursos.",
      noCoursesAddedNote: "Nota: Aún no has agregado cursos.",
      buttonLabelCollapse: "Colapsar cursos",
      buttonLabelShowAll: "Mostrar todos los cursos",
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "¡Tu curso se actualizó correctamente!",
          editSuccessToastDescription:
            "Por favor, actualiza la página para ver tus cambios.",
          editErrorToastMessage:
            "Desafortunadamente, la operación no tuvo éxito.",
          editErrorToastDescription: "No se pudo editar el curso.",
          deleteSuccessToastMessage: "El curso se eliminó correctamente.",
          deleteSuccessToastDescription:
            "Por favor, actualiza la página para ver tus cambios.",
          deleteErrorToastMessage:
            "Desafortunadamente, la operación no tuvo éxito.",
          deleteErrorToastDescription: "No se pudo eliminar el curso.",
        },
        courseStatusOpen: "Abierto",
        courseStatusInProgress: "En curso",
        courseStatusDone: "Completado",
        selectStatusPlaceholder: "Seleccionar estado",
        status: "Estado",
        grade: "Nota",
        dropdown: {
          edit: "Editar",
          delete: "Eliminar",
        },
      },
    },
  },
  overviewCard: {
    cardTitle: "Resumen",
    cardDescription: "Tus estudios de un vistazo.",
    cardNote: "Nota: Por favor, inicia sesión para acceder a tus estadísticas.",
    openCourses: "Cursos abiertos",
    finishedCourses: "Cursos completados",
    gradeAverage: "Promedio de notas",
    progress: "Progreso",
  },
};
