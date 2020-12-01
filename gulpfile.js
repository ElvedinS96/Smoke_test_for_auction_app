var gulp = require("gulp");
var protractor = require("gulp-protractor").protractor;


gulp.task("default", function(){
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
gulp.task('install', function install(done) {
    spawnCmd('webdriver-manager', ['update', '--versions.chrome=latest'], done);
    });
