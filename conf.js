exports.config = {
    directConnect: true,
    framework: 'jasmine',
    specs: ['./Tests/smokeTest.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      }
  }