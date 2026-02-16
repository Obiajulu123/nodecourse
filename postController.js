const posts =[
    {id:1, title:'Post One'},
    {id:2, title:'Post Two'},
    {id:3, title:'Post Three'},
]

const getPosts = ()=> posts

// export {
//     getPosts
// }
export const getPostlength = ()=>getPosts().length

export default getPosts

