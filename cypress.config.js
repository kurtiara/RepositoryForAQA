const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    // retries: {
    //   runMode: 2, // Повторить 2 раза при запуске через CLI
    //   openMode: 1, // Повторить 1 раз при запуске через GUI
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
