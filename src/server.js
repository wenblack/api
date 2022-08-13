const express  = require ("express");

const app = express();

const PORT = 333;

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));