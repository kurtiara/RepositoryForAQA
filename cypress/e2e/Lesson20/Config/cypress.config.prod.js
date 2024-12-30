const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    username: "karakurtiara+123@gmail.com",
    password: "Ax9.Dv5BKt3csep",
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },
});
