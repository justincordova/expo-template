import { cn } from './cn';

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('px-4', false, 'py-2', null, undefined)).toBe('px-4 py-2');
  });
});
