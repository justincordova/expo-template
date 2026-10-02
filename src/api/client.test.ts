import { ApiError, apiFetch } from './client';

describe('apiFetch', () => {
  const originalApiBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;

  beforeEach(() => {
    process.env.EXPO_PUBLIC_API_BASE_URL = 'https://api.example.com';
  });

  afterEach(() => {
    process.env.EXPO_PUBLIC_API_BASE_URL = originalApiBaseUrl;
    jest.restoreAllMocks();
  });

  it('returns parsed JSON for a successful response', async () => {
    const fetchMock = jest.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ id: 'user-1' }),
    } as Response);

    await expect(apiFetch<{ id: string }>('/users/me')).resolves.toEqual({ id: 'user-1' });
    expect(fetchMock).toHaveBeenCalledWith(
      new URL('/users/me', 'https://api.example.com'),
      undefined,
    );
  });

  it('throws an ApiError for a failed response', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 401 } as Response);

    await expect(apiFetch('/users/me')).rejects.toEqual(
      new ApiError(401, 'Request failed with status 401.'),
    );
  });
});
