import { createServer } from 'http'

const PORT = process.env.PORT

const users = [
    {id:1 , name:'John Doe'},
    {id:2 , name:'Kelvin Dash'},
    {id:3 , name:'Ifeoma Okoye'},
]

const logger = (req,res,next)=>{
    console.log(req.url, req.method)
    next()
}

const jsonMiddleware = (req, res, next)=>{
       res.setHeader('Content-Type', 'application/json')
       next()
} 

const getUsersHandler = (req, res)=>{
    res.write(JSON.stringify(users))
    res.end()
}

const getUserByIdHandler = (req, res)=>{
     const id = req.url.split('/')[3]
        let user = users.find((user)=>(
            user.id === parseInt(id)
        )) 
        
     res.write(JSON.stringify(user))
    res.end()
}

const notFoundHandler = (req, res)=>{
    
        res.write(JSON.stringify({message:'DOESNT EXSIST'}))
        res.end()
}

const createUserHandler = (req, res)=>{
    let body = '';
    req.on('data', (chunk)=>{
        body += chunk.toString() 
    })

    req.on('end', ()=>{
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.write(JSON.stringify(newUser))
        res.end()
    })


}

const server = createServer((req, res)=>{
 
    logger(req, res, ()=>{
        jsonMiddleware(req, res, ()=>{

        if(req.url === '/api/users' && req.method === 'GET'){
            getUsersHandler(req, res)
        }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
            getUserByIdHandler(req,res)
        }else if(req.url === '/api/users' && req.method === 'POST'){
            createUserHandler(req, res)
        } else{

            notFoundHandler(req,res)
        }
        })
       
    })   

})

server.listen(PORT, ()=>{
    console.log(`Server 2 is ruuning on port ${PORT}`)
})