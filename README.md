# gulp-deploy-ssh

> Gulp plugin to deploy files using SSH with password prompt

## Install

`npm install --save-dev gulp-deploy-ssh`

## Usage
 
```js
var gulp = require('gulp')
var deploy = require('gulp-deploy-ssh')
 
// task to prompt for SSH credentials
gulp.task('login:production', deploy.login('example.com'))
 
// task to deploy files to SSH host
gulp.task('deploy:production', function () {
    return gulp.src('www/**/*').pipe(deploy['example.com'].dest('/var/www'))
})
 
// add as many hosts as needed
gulp.task('login:test', deploy.login('test.example.com'))
 
gulp.task('deploy:test', function () {
    return gulp.src('www/**/*').pipe(deploy['test.example.com'].dest('/var/www'))
})
```

## License

[GPL-3.0]('https://github.com/brechtpm/gulp-deploy-ssh/LICENSE')
