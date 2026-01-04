const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uks68s",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
  },
});
