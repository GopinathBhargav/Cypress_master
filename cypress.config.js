const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})


https://hooks.slack.com/services/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
