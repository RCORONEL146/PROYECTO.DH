function calcular(tipo,jamon, queso,salsa,mayo,mostaza,tomate,lechuga,cebolla) {
  let precio=0
switch (tipo.toLowerCase()) {
    case "carne a la parrila":
        precio=precio+1800;
        break;
    case "pollo":
        precio=precio+1500;
        break;
    case "vegetariana":
        precio=precio+1200;        
        break;
    default:
         console.log("debes elegir alguna de las tres opciones");
        break;
}    
if (jamon==true) {
    precio=precio+30
   } 

 if (queso==true) {
    precio=precio+25 
 } 
    
 if (salsa==true) {
    precio=precio+5 
} 

 if (mayo==true) {
    precio==precio+5 
}

 if (mostaza==true) {
    precio=precio+15
}

 if (tomate==true){
     precio=precio+15
    }
 
if (lechuga==true){
   precio=precio+10 
}

if (cebolla==true){
    precio=precio+10
}     
   return precio
}

function usuario(nombre,apellido,callback) {
    return console.log( "Estimado cliente "+nombre+" "+apellido+" , el monto a pagar es:" + callback("pollo",true,false ,true,false,true,false,true,true) );    
}

usuario ("ricardo","coronel",calcular)

