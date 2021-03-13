module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/src/configs/jest-setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/src/helpers/mocks/styleMock.js",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
    },
  },
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
};
