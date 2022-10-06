module.exports = {
  // look at .js, .jsx, .ts, .tsx
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    /*
     * Handle CSS imports (with CSS modules)
     * https://jestjs.io/docs/webpack#mocking-css-modules
     */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',

    /*
     * Handle image imports
     * https://jestjs.io/docs/webpack#handling-static-assets
     */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^lodash-es$': 'lodash',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Ignore any files that match this pattern.
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  // jest environment to jsdom which is a browser-like environment.
  testEnvironment: 'jsdom',
  /*
   * Transform source files through babel before running the __tests__
   * https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
   */
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
