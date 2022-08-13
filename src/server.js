const express  = require ("express");

const app = express();


app.get("/", (request,response)=>{
  response.send('Hello World');
});

const PORT = 333;

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
