export interface RegisterUser {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
}

export interface User extends RegisterUser {
  id: string;
}
