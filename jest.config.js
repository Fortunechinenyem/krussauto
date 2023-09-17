module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
