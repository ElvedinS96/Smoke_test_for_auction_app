exports.config = {
    framework : "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["./Tests/biddingTests.js",
    "./Tests/aboutUsTests.js",
    "./Tests/loginTests.js",
    "./Tests/privacyAndPolicyTests.js",
    "./Tests/registrationTests.js",
    "./Tests/termsAndConditionsTests.js"
  ],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      }
  }