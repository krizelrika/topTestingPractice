import calculator from '../src/calculator.js';

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});

test('divides two numbers', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

test('handles division by zero', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});
