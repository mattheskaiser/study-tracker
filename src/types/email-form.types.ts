export type EmailFormData = {
  email: string;
  pin: string;
  confirmPin: string;
  newUser: boolean;
};

export type ApiUserResponse = {
  user: {
    id: string;
    email: string;
  };
};