module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s', '**/*.(t|j)sx'],
  coverageDirectory: '../coverage',
  coverageReporters: ['lcov'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/pages/', '/playground/'],
  rootDir: 'src',
};
