import capitalize from '../src/capitalize.js';

test('capitalizes first character', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('works with already capitalized strings', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('handles empty string', () => {
  expect(capitalize('')).toBe('');
});