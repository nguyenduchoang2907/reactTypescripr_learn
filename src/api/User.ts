//register local
export interface RegisterLocalRequest {
  email: string;
  password: string;
  name: string;
}
export interface RegisterLocalResponse {
  message: string;
  account?: {
    id: number;
    email: string;
    provider: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    user_id: number;
    account_id: number;
    name: string;
    username: string;
    phone: string | null;
    address: string;
    role: string;
    created_at: string;
    updated_at: string;
    createdAt: string;
    updatedAt: string;
  };
}
//verifyAccount(bug)
export interface verifyAccountRequest {
  token: string;
}
export interface verifyAccountResponse {
  message: string;
}

//login
export interface postLoginRequest {
  email: string;
  password: string;
}
export interface postLoginResponse {
  message: string;
  token: string;
  expires: string;
}
//Logout
export interface postLogoutRequest {
  message: string;
}

//requestPasswordReset
export interface requestPasswordReset {
  email: string;
}
export interface responsePasswordReset {
  message: string;
}
//resetPassword
export interface resetPasswordRequest{
    token:string;
    newPassword:string;
}
export interface resetPasswordResponse{
    message:string;
}

//updatePassword after login
export interface updatePasswordRequest{
    oldPassword:string;
    newPassword:string;
}
export interface updatePasswordResponse{
    message:string;
}
//update avatar (chưa test)
