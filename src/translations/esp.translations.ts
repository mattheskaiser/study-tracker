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
        successToastMessage: "¡Curso creado exitosamente!",
        successToastDescription: "Tu nuevo curso ha sido añadido a la lista",
        errorToastMessage: "Error al crear el curso",
        errorToastDescription: "Por favor, inténtalo de nuevo.",
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
      filterDropdown: {
        filterByStatus: "Filtrar por estado",
        open: "Abierto",
        inProgress: "En progreso",
        done: "Completado"
      },
      courseTabOrganism: {
        toasts: {
          editSuccessToastMessage: "¡Curso actualizado exitosamente!",
          editSuccessToastDescription: "Tus cambios han sido guardados",
          editErrorToastMessage: "Error al actualizar el curso",
          editErrorToastDescription: "Por favor, inténtalo de nuevo más tarde.",
          deleteSuccessToastMessage: "Curso eliminado exitosamente",
          deleteSuccessToastDescription: "El curso ha sido eliminado permanentemente",
          deleteErrorToastMessage: "Error al eliminar el curso",
          deleteErrorToastDescription: "Por favor, inténtalo de nuevo más tarde.",
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
