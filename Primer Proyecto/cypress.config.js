const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "4wwx2f",
  retries:{
    runMode:1,
  },
  env: {
    url : "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
    specPattern: 'cypress/integration/examples/**/*.js'
  },
});

// test execution results must be in json format. 
// json -> html 
