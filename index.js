var Remote = require('gulp-ssh')
var inquirer = require('inquirer')

module.exports.login = function (host) {
    return function (done) {
        var questions = [{
            message: 'Username',
            name: 'username',
            type: 'input'
        },{
            message: 'Password',
            name: 'password',
            type: 'password'
        }]

        inquirer.prompt(questions).then(function (res) {
            module.exports[host] = new Remote({
                ignoreErrors: false,
                sshConfig: {
                    host: host,
                    username: res.username,
                    password: res.password
                }
            })

            done()
        })
    }
}
