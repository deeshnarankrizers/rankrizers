export interface loginPayload{
    email: string;
    password:string
}
export interface LoginResponse {
  token: string;
  message: string;
}