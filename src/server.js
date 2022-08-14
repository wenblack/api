//import Express
const express = require("express");
//Routes of application:
const routes = require("./routes");
//Using express
const app = express();
app.use(express.json());
app.use(routes);

/* Request Example:                                                                
app.get("/:id/:user", (request,response)=>{
  
  const {id , user } = request.params
  
  response.send(`
  Message: ${id}
  For the User: ${user}
  `
  )
});*/
/*Root route
app.get("/", (request,response)=>{
  response.send('Hello World')
});*/

//port to listen
const PORT = 333;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
