/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

/// <reference types=”@shelex/cypress-allure-plugin” />

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;

  // on("before:browser:launch", (browser = {}, launchOptions) => {
  //   console.log(
  //     "launching browser %s is headless? %s",
  //     browser.name,
  //     browser.isHeadless
  //   );

  //   // the browser width and height we want to get
  //   // our screenshots and videos will be of that resolution
  //   // let's set it to 4k
  //   const width = 3840;
  //   const height = 2160;

  //   console.log("setting the browser window size to %d x %d", width, height);

  //   if (browser.name === "chrome" && browser.isHeadless) {
  //     launchOptions.args.push(`--window-size=${width},${height}`);

  //     // force screen to be non-retina and just use our given resolution
  //     launchOptions.args.push("--force-device-scale-factor=1");
  //   }

  //   if (browser.name === "electron" && browser.isHeadless) {
  //     // might not work on CI for some reason
  //     launchOptions.preferences.width = width;
  //     launchOptions.preferences.height = height;
  //   }

  //   if (browser.name === "firefox" && browser.isHeadless) {
  //     launchOptions.args.push(`--width=${width}`);
  //     launchOptions.args.push(`--height=${height}`);
  //   }

  //   return launchOptions;
  // });
};
