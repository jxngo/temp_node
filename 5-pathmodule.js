// built in module from path
const path = require('path')
console.log(path.sep)

// path.join creates combined string of dir listed
const filePath = path.join('/content','subfolder','test,txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)