var assert = require('assert')
var xecutor = require('../index.js')

var { $ } = new xecutor({ host: 'root@ecma', dir: '/root' })

var { text, executed } = $(`ls -la`)

console.log(text)
console.log(executed)

assert.ok(text.startsWith('total'))
assert.equal(executed, `ssh root@ecma 'cd /root && ls -la'`)

$.cd(`/root/waveorb-server2`)

var { text, executed } = $(`ls -la`)

console.log(text)
console.log(executed)

assert.ok(text.startsWith('total'))
assert.equal(executed, `ssh root@ecma 'cd /root/waveorb-server2 && ls -la'`)

assert.equal($.pwd(), '/root/waveorb-server2')
assert.ok($.tmpdir().startsWith('/'))
