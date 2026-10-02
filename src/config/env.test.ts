import { loadPublicEnv } from './env';

describe('loadPublicEnv', () => {
  it('returns the configured public API URL', () => {
    expect(loadPublicEnv({ EXPO_PUBLIC_API_BASE_URL: 'https://api.example.com' })).toEqual({
      apiBaseUrl: 'https://api.example.com',
    });
  });

  it('rejects a missing API URL', () => {
    expect(() => loadPublicEnv({})).toThrow('EXPO_PUBLIC_API_BASE_URL is required.');
  });

  it('rejects an invalid API URL', () => {
    expect(() => loadPublicEnv({ EXPO_PUBLIC_API_BASE_URL: 'not a URL' })).toThrow(
      'EXPO_PUBLIC_API_BASE_URL must be a valid URL.',
    );
  });
});
