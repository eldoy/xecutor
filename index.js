const cmd = require('child_process')
const xecutor = {}

// Run a shell command or pass an array of commands
xecutor.run = (c, o = {}) => {
  if (!o.stdio) o.stdio = 'inherit'
  if (c.constructor !== Array) {
    c = [ c ]
  }
  cmd.execSync(c.join(' && '), o)
}

module.exports = xecutor