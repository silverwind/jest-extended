import { contains } from '../utils';

export function toContainValue(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainValue') +
    '\n\n' +
    'Expected object to not contain value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainValue') +
    '\n\n' +
    'Expected object to contain value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const values = Object.keys(actual).map(k => actual[k]);
  const pass = contains(this.equals, values, expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
