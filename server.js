const express = require("express");
const app = express();
 
var userRoute = require('./userRoute');
app.use('/', userRoute);

 
app.listen(3000, ()=>{
    console.log('Servidor iniciado');
})
