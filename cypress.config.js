const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/html",   // Folder output
    overwrite: false,
    html: false,                          // Jangan generate HTML langsung dari setiap file
    json: true
  },
  e2e: {
    env: {
      ...process.env
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  video: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  // videoUploadOnPasses: true
});
