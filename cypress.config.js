const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gpgb1o",
  video: true,
  reporter: "cypress-mochawesome-reporter",
  //projectId: '858wmu',
  e2e: {
    retries: {
      runMode: 2,
      openMode: 2,
    },
    baseUrl: "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
    env: {
      url: "https://rahulshettyacademy.com/AutomationPractice/",
      test_url: "https://automationteststore.com/",
      cart_url: "https://rahulshettyacademy.com/seleniumPractise/#/",
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require("./cypress/plugins/index.js")(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
