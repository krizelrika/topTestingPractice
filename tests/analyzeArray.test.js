import analyzeArray from '../src/analyzeArray.js';

test('returns correct analysis object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('works with negative numbers', () => {
  expect(analyzeArray([-2, 4, 10])).toEqual({
    average: 4,
    min: -2,
    max: 10,
    length: 3
  });
});
