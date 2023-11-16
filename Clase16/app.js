const  express = require('express');
const path = require('path')
const app = express()

app.listen(3000,() => {
    console.log('servidor corriendo puerto 3000 como ella');
})
app.get ('/', (req,res) =>{
    res.send('estamos ready')
})
app.get ('/contacto', (req,res) =>{
    res.send('estamos en contacto')
})
app.get('/sendfile',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})