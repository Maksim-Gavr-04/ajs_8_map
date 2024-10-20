import { test, expect } from '@jest/globals';
import { ErrorRepository } from '../ErrorRepository';

test('Testing the `translate()` method with the correct error code', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(400)).toBe('The server has detected an error in the syntax of your request');
});

test('Testing the `translate()` method with an unknown error code', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(0)).toBe('Unknown error');
});