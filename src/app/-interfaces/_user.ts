export interface _user {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}
export interface _response {
  success: boolean;
  message: string;
  user?: _user;
}
export interface _loginResponse {
  success: boolean;
  message: string;
  token: string;
  user?: _user;
}

export interface _loginRequest {
  userName: string;
  password: string;
}
