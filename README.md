# Shell command runner for Node.js

Easily run shell commands from within Node.js

### INSTALLATION
```npm i xecutor``` or ```yarn add xecutor```

### USAGE
```javascript
const cmd = require('xecutor')

// Run a command
cmd.run(`docker push fugroup/app`)

// Run multiple commands
cmd.run([
  `rm -rf app/config`,
  `cp -Rv ../app/config app`
])

// Run a command with options
// Options are the same as Node.js child_process.exec
cmd.run(`docker push fugroup/app`, { stdio: 'ignore' })
```
Enjoy! MIT Licensed.
