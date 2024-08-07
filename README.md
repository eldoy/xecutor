# Shell command runner for Node.js

Easily run shell commands from within Node.js, both locally and remote.

### Installation
```
npm i xecutor
```

### Usage
```js
var xecutor = require('xecutor')

var terminal = new xecutor({
  // The host name. Leave blank to run commands locally (default).
  host: 'root@ecma',

  // The dir to start executing commands in.
  // Default is your current dir for local, and the home dir for remote.
  dir: '/root',

  // The limit of history items, default is 10 000.
  // Set to 0 or null to disable history
  history: 10_000
})

terminal.history    // Log of all commands
terminal.dir        // Last working directory
terminal.id         // The unique id of this terminal

var { $ } = terminal

// Run a command
var result = $(`ls -la`)

// Temporarily override dir
var result = $(`ls -la`, { dir: '/home' })

// Temporarily override host
var result = $(`ls -la`, { host: 'vidar@68.141.121.18' })

result.stdout      // stdout output
result.stderr      // stderr output
result.code        // exit code
result.dir         // the working directory
result.command     // the last command executed
result.executed    // the actual command including host and dir
result.text        // the text from stdout or stderr

// Change dir, commands will be executed here from now
// Path must be absolute
$.cd(`/users/eldoy`)

// Returns current working dir
$.pwd()

// Get the tmpdir
$.tmpdir()

// Change to tmpdir
$.cd($.tmpdir())
```

MIT Licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)
