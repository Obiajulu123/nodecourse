import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/test.txt'

console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.extname(filePath))
console.log(path.parse(filePath))
console.log(path.parse(filePath).ext)

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname, __filename)
const filePath2 = path.join(__dirname, 'dir1', 'test.txt')

console.log(filePath2)
console.log('hello git testing')