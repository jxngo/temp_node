// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./3.1-module')
const sayHi = require('./3.2-module')
const data = require('./3.3-module')


// 3.1
console.log(names)
// 3.2
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
// 3.3
console.log(data)
// 4
require('./3.4-module')