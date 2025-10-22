const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'My Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
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
