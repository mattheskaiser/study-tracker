export const espTranslations = {
  validation: {
    email: {
      required: "El correo electrónico es obligatorio",
      invalid: "Correo electrónico inválido"
    },
    course: {
      name: {
        required: "El nombre del curso no puede estar vacío"
      },
      grade: {
        requiredIfDone: "La calificación es obligatoria cuando el curso está completado",
        onlyIfDone: "La calificación solo puede establecerse cuando el curso está completado"
      }
    }
  },
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
  createCourseCard: {
    title: "Creación de Cursos",
    description: "Agrega nuevos cursos a tu lista"
  },
  courseListCard: {
    title: "Lista de Cursos",
    description: "Lista de tus cursos - edítalos o haz lo que necesites"
  },
  common: {
    save: "Guardar",
    selectLanguage: "Idioma",
    languages: {
      english: "Inglés",
      spanish: "Español",
      german: "Alemán"
    },
    selectSemester: "Seleccionar semestre",
    semesters: {
      sem1: "1er Semestre",
      sem2: "2do Semestre",
      sem3: "3er Semestre",
      sem4: "4to Semestre",
      sem5: "5to Semestre",
      sem6: "6to Semestre"
    }
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
        successToastDescription: "Tu curso ha sido agregado a la lista.",
        errorToastMessage: "Desafortunadamente, el proceso no fue exitoso.",
        errorToastDescription: "No se pudo crear el curso.",
      },
      form: {
        courseNamePlaceholder: "Introduce el nombre del curso...",
        semesterPlaceholder: "Seleccionar semestre",
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
      filterByStatus: "Filtrar por estado",
      boardTitle: "Panel de Cursos",
      totalCourses: "total",
      viewTabs: {
        status: "Estado",
        semester: "Semestre",
      },
      semesterLabels: {
        sem1: "1er Semestre",
        sem2: "2do Semestre",
        sem3: "3er Semestre",
        sem4: "4to Semestre",
        sem5: "5to Semestre",
        sem6: "6to Semestre",
      },
      emptyState: "Sin cursos",
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "¡Tu curso se actualizó correctamente!",
          editSuccessToastDescription: "Tus cambios han sido guardados.",
          editErrorToastMessage:
            "Desafortunadamente, la operación no tuvo éxito.",
          editErrorToastDescription: "No se pudo editar el curso.",
          deleteSuccessToastMessage: "El curso se eliminó correctamente.",
          deleteSuccessToastDescription: "El curso ha sido removido de tu lista.",
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
  createCourseCard: {
    cardTitle: "Creación de Cursos",
    cardDescription: "Agrega nuevos cursos a tu lista de cursos",
  },
  courseListCard: {
    cardTitle: "Panel de Cursos",
    cardDescription: "Gestiona tus cursos con vistas de estado y semestre",
  },
  validation: {
    email: {
      required: "El correo electrónico es obligatorio",
      invalid: "Correo electrónico no válido",
    },
    course: {
      nameRequired: "El nombre del curso no puede estar vacío",
      semesterRequired: "La selección del semestre es obligatoria",
      gradeRequiredWhenDone: "La calificación es obligatoria cuando el curso está completado",
      gradeOnlyWhenDone: "La calificación solo se puede proporcionar cuando el curso está completado",
      gradeRange: "La calificación debe estar entre 1 y 6",
    },
  },
};
