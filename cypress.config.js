const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    "overwrite": false,
    "html": true,
    "json": true
  },
  e2e: {
    env: {
      ...process.env
    },
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
  },
  video: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  // videoUploadOnPasses: true
});
