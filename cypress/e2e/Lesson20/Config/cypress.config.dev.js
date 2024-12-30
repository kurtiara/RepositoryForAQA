const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto2.forstudy.space/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    username: "karakurtiara+test@gmail.com",
    password: "7rKjYy5VG7c2dvR",
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },
});
