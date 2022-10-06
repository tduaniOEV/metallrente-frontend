// jest.setup.js
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
  jest.setTimeout(10000);
});
afterEach(() => {
  cleanup();
});
