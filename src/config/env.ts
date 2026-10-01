type PublicEnvironment = {
  [name: string]: string | undefined;
  EXPO_PUBLIC_API_BASE_URL?: string;
};

export type PublicEnv = {
  apiBaseUrl: string;
};

export function loadPublicEnv(environment: PublicEnvironment): PublicEnv {
  const apiBaseUrl = environment.EXPO_PUBLIC_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error('EXPO_PUBLIC_API_BASE_URL is required.');
  }

  try {
    new URL(apiBaseUrl);
  } catch {
    throw new Error('EXPO_PUBLIC_API_BASE_URL must be a valid URL.');
  }

  return { apiBaseUrl };
}

export function getPublicEnv(): PublicEnv {
  return loadPublicEnv(process.env);
}
