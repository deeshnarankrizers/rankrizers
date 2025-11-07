export async function apiClient<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody?.message || "API Error");
  }

  return response.json() as Promise<T>;
}