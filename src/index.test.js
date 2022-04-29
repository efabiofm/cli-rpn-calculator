const main = require('./index');

test('Invalid inputs', () => {
  const invalidInputMsg = '\x1b[31mInvalid input\x1b[0m';
  expect(main.calculate('x')).toBe(invalidInputMsg);
  expect(main.calculate('++')).toBe(invalidInputMsg);
  expect(main.calculate('@')).toBe(invalidInputMsg);
});

test('Insufficient numbers', () => {
  const insufficientNumsMsg = '\x1b[31mInsufficient numbers\x1b[0m';
  expect(main.calculate('+')).toBe(insufficientNumsMsg);
  expect(main.calculate('5 +')).toBe(insufficientNumsMsg);
});

test('One input at a time', () => {
  expect(main.calculate('5')).toBe('5');
  expect(main.calculate('8')).toBe('8');
  expect(main.calculate('+')).toBe(13);
});

test('Multiple inputs at once', () => {
  expect(main.calculate('5 5 5 8 + + -')).toBe(-13);
  expect(main.calculate('13 +')).toBe(0);
});

test('Negative values', () => {
  expect(main.calculate('-3')).toBe('-3');
  expect(main.calculate('-2')).toBe('-2');
  expect(main.calculate('*')).toBe(6);
  expect(main.calculate('5')).toBe('5');
  expect(main.calculate('+')).toBe(11);
});

test('Operators between numbers', () => {
  expect(main.calculate('5 1 2 + 4 * + 3 -')).toBe(14);
});
