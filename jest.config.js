module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/src/config/jest-setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.spec.json",
    },
  },
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
};
