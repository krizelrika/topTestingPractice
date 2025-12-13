import reverseString from '../src/reverseString.js';

test('reverses a simple string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('handles empty string', () => {
  expect(reverseString('')).toBe('');
});

test('keeps spaces and punctuation correctly', () => {
  expect(reverseString('Hi!')).toBe('!iH');
});