import { getPublicEnv } from '@/config/env';

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const { apiBaseUrl } = getPublicEnv();
  const response = await fetch(new URL(path, apiBaseUrl), options);

  if (!response.ok) {
    throw new ApiError(response.status, `Request failed with status ${response.status}.`);
  }

  return response.json() as Promise<T>;
}
