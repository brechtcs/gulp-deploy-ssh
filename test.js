var deploy = require('./')
var test = require('tape')

test('Creating an SSH connection with password prompt', function (t) {
    t.plan(4)

    deploy.login('localhost')(function () {
        t.ok(deploy['localhost'], 'Create an accessible SSH object')
        t.equal(deploy['localhost'].options.sshConfig.host, 'localhost', 'Set correct SSH hostname')
        t.ok(deploy['localhost'].options.sshConfig.username, 'Get SSH username from prompt')
        t.ok(deploy['localhost'].options.sshConfig.password, 'Get SSH password from prompt')
    })
})

