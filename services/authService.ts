import { loginPayload, LoginResponse } from "@/types/auth";
import { apiClient } from "./apiClient";


export async function loginUser(data: loginPayload): Promise<LoginResponse> {
  return apiClient<LoginResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}