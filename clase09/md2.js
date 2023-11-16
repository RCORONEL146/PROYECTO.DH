const fs = require ("fs");
const contenido = fs.readFileSync("./mensaje.txt" , "utf-8");
 console.log(contenido);