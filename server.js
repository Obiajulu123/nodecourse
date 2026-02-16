import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

 const __filename = url.fileURLToPath(import.meta.url)
 const __dirname = path.dirname(__filename);

const server = http.createServer(async(req,res)=>{
 
    try {

        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
            filePath = path.join(__dirname, './public/index.html')
        
    console.log('testing A')
    }else if(req.url === '/about'){

          filePath = path.join(__dirname, './public/about.html')
         console.log('testing B')
    }else{
    
         console.log('testing C')
    }

            const data = await fs.readFile(filePath)
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
    }else{
        throw new Error('Method Not Allowed')
    }
        
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>NOT FOUND </h1>')
    }
    
     
})

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})