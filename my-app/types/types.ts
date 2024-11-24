export interface FormData {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
}
