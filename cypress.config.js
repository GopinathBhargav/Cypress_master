const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
=======

    baseUrl: 'http://www.webdriveruniversity.com/Contact-Us/contactus.html',
    "env": {
      "url": "https://rahulshettyacademy.com/AutomationPractice/",
      "test_url":"https://automationteststore.com/",
      "cart_url":"https://rahulshettyacademy.com/seleniumPractise/#/"
    },
>>>>>>> 3a5d0415c527a4f92f64c9473884000c3c18b8ea
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
<<<<<<< HEAD
    },
  },
})


https://hooks.slack.com/services/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
=======
    }

  },
})
>>>>>>> 3a5d0415c527a4f92f64c9473884000c3c18b8ea
