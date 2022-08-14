const {Router} = require("express")

const userRoutes = Router()
//Query params 
userRoutes.post ("/", (request,response)=>{
  const { name , email , password} = request.body
  /*Response use send method
  response.send(`User :${name} 
  E-mail:${email} 
  and Password:${password} `)*/
  //Response use json method
  response.json([name, email, password])
})

module.exports = userRoutes