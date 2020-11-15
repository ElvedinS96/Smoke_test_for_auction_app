exports.config = {
    framework : "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
<<<<<<< HEAD
    specs: [//'./Tests/smokeTest.js'
    "./Tests/regressionTests.js"
  ],
=======
    specs: ["./Tests/regressionTests.js"],
>>>>>>> e0b9158... Added data page
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      }
  }