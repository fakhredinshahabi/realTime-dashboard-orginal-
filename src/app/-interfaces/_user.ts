export interface _user {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}
export interface _responseRigesterUser {
  success: boolean;
  message: string;
  user?: _user;
}
export interface _responseLoginUser {
  success: boolean;
  message: string;
  token: string;
  user?: _user;
}

export interface _userLogin {
  userName: string;
  password: string;
}
