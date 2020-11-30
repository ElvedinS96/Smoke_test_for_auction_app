exports.config = {
    /* directConnect: true, */
    /* seleniumAddress: 'http://localhost:4444/wd/hub', */
    framework : "jasmine",
    specs: ["./Tests/biddingTests.js",
    "./Tests/aboutUsTests.js",
    "./Tests/loginTests.js",
    "./Tests/privacyAndPolicyTests.js",
    "./Tests/registrationTests.js",
    "./Tests/termsAndConditionsTests.js",
    "./Tests/newArrivalsTest.js",
    "./Tests/topRatedTest.js",
    "./Tests/lastChanceTest.js",
    "./Tests/shopTests.js",
    "./Tests/featureCollectionTest.js",
    "./Tests/featureProductsTest.js",
    "./Tests/searchBarTests.js"
  ],
  
  localSeleniumStandaloneOpts:{
    port: 4455,
    args:['-browserTimeout=60']

  },
  seleniumServerJar: "C:/Users/zsadi/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar",
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      },
     /* capabilities: {
        browserName: 'chrome',
      
      chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
         }
    } */
  }