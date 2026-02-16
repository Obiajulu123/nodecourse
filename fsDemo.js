// import fs from 'fs'
import fs from 'fs/promises'

// fs.readFile('./test.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data)
// })

const readFile = async ()=>{
    try {
  const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const writeFile = async()=>{
    try {
       await fs.writeFile('./test.txt', 'writing new text') 
       console.log('File written to ....')
    } catch (error) {
        console.log(error)
    }
}

const appendFile = async ()=>{
    try {
        await fs.appendFile('./test.txt', '\n This is appended to exsisting text')
        console.log('appended file here')
    } catch (err) {
        console.log(err)
    }
}

writeFile()
appendFile()
readFile()