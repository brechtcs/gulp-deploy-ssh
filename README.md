# gulp-deploy-ssh

> Gulp plugin to deploy files using SSH with password prompt

This plugin covers the narrow use case where you 1) can't use private key authentication, or 2) can't get your username and password through an environment variable, and 3) don't want to hardcode authentication details in your gulpfile. If do want one of these methods instead of a password prompt, just use [`gulp-ssh`](https://github.com/teambition/gulp-ssh) directly.

## Install

`npm install --save-dev gulp-deploy-ssh`

## Usage
 
```js
var gulp = require('gulp')
var deploy = require('gulp-deploy-ssh')
 
// prompt for SSH credentials
gulp.task('login:production', deploy.login('example.com'))
 
// deploy files to SSH host
// IMPORTANT: Don't forget to add login task as dependency
gulp.task('deploy:production', ['login:production'], function () {
    return gulp.src('www/**/*').pipe(deploy['example.com'].dest('/var/www'))
})
 
// add as many hosts as needed
gulp.task('login:test', deploy.login('test.example.com'))
 
gulp.task('deploy:test', ['login:test'], function () {
    return gulp.src('www/**/*').pipe(deploy['test.example.com'].dest('/var/www'))
})
```

## License

[GPL-3.0]('https://github.com/brechtpm/gulp-deploy-ssh/LICENSE')
