const { defineConfig } = require('cypress');
require('dotenv').config(); // ini penting

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.GOREST_TOKEN = process.env.GOREST_TOKEN;
      return config;
    },
  },
});