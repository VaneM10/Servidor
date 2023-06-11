const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Holaa a todos como estan :(')
})

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})