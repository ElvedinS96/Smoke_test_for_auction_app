exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Tests/smokeTest.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      }
  }