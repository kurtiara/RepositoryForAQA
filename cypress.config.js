const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // pageLoadTimeout: 9000,
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
