exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: ['./Tests/smokeTest.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      }
  }