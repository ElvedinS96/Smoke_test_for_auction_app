var webdriver = require('gulp-webdriver');
var gulp = require("gulp");
var protractor = require("gulp-protractor").protractor;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;


gulp.task("Registration tests", function(){
    return gulp.src(["./Tests/registrationTests.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: [
            '--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e })
})

gulp.task("Search bar tests", function(){
    return gulp.src(["./Tests/searchBarTests.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: [
            '--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e })
})
gulp.task("Registration tests", function(){
    return gulp.src(["./Tests/registrationTests.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: [
            '--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e })
})