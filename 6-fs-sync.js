// sync, doesnt take callback so your callback which calls response.
//       send will never get called and therefore the response will never
//       end and it will timeout
const { readFileSync, writeFileSync } = require('fs')
console.log('start')

// Reads file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

// Write/Overwrite file
writeFileSync(
    './content/result-synx.txt',
    `Here is the result : ${first},${second}`,
    { flag: 'a' }
)
console.log('done with this task')
console.log('starting with the next one')