var extras = require('extras')
var os = require('node:os')

function xecutor(config = {}) {
  var self = this
  self.id = extras.hex()
  self.history = []
  self.dir = config.dir || process.cwd()

  if (typeof config.limit == 'undefined') {
    config.limit = 10_000
  }

  var $ = function (command, options = {}) {
    var dir = options.dir != null ? options.dir : self.dir
    var host = options.host != null ? options.host : config.host

    var executed = command
    if (dir) {
      executed = `cd ${dir} && ${executed}`
    }
    if (host) {
      executed = `ssh ${host} '${executed}'`
    }

    var result = extras.run(executed, { silent: true })
    result.dir = self.dir
    result.command = command
    result.executed = executed
    result.text = (result.stderr || result.stdout).trim()

    self.history.unshift(result)
    if (config.limit) {
      self.history = self.history.slice(0, config.limit)
    }

    return result
  }

  $.cd = function (dir) {
    return (self.dir = dir)
  }

  $.pwd = function () {
    return self.dir
  }

  $.tmpdir = function () {
    return self.host ? '/tmp' : os.tmpdir()
  }

  self.$ = $
}

module.exports = xecutor
