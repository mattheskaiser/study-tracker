export const espTranslations = {
  accountFinderCard: {
    cardTitle: "Encuentra tus datos",
    cardDescriptionLoginFalse:
      "Busca tu correo electrónico, en caso de que ya estés registrado. De lo contrario, ingresa tu correo electrónico para crear una cuenta.",
    cardDescriptionLoginTrue:
      "Nota: Ahora estás conectado a tu cuenta y puedes ver y editar tus cursos, así como consultar tus estadísticas.",
    findEmailOrganism: {
      toasts: {
        successToastMessage: "¡El proceso fue exitoso!",
        successToastDescription: "Tu cuenta fue encontrada o creada.",
        errorToastMessage: "Desafortunadamente, el proceso no fue exitoso.",
        errorToastDescription: "Tu cuenta no fue encontrada.",
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
};
