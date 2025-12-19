import caesarCipher from '../src/caesarCipher.js';

test('shifts letters by factor', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('wraps around z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves letter case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('keeps punctuation/spacing unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
