const  express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.listen(3030,() => {
    console.log('servidor corriendo puerto 3030 ');
})
///////////////ruta absoluta de lo que queramos buscar,//////////////
app.get ('/', (req,res) =>{
    res.sendFile(path.resolve('./views/index.html'))
})

app.get ('/babbage', (req,res) =>{
    res.sendFile(path.resolve('./views/babbage.html'))
})
app.get ('/berners-lee', (req,res) =>{
    res.sendFile(path.resolve('./views/berners-lee.html'))
})
app.get ('/clarke', (req,res) =>{
    res.sendFile(path.resolve('./views/clarke.html'))
})
app.get ('/hamilton', (req,res) =>{
    res.sendFile(path.resolve('./views/hamilton.html'))
})
app.get ('/hopper', (req,res) =>{
    res.sendFile(path.resolve('./views/hopper.html'))
})
app.get ('/lovelace', (req,res) =>{
    res.sendFile(path.resolve('./views/lovelace.html'))
})
app.get ('/turing', (req,res) =>{
    res.sendFile(path.resolve('./views/turing.html'))
})


