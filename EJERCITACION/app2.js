/* let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(estudiantes)){
    return aprobado >=5 ;
  }
let desaprobados = estudiantes.filter(function(estudiantes)){
 return desaprobados <=5 ; 
}
     */
    /* function laCLaveSecreta(mensajeCifrado){
  let mensajeDescifrado=[];
  let i = 0;
  while (i<mensajeCifrado.length){
    if (mensajeCifrado[i] != "*"){
      mensajeDescifrado[i]=mensajeCifrado[i];
    }
    i+1;
  }
  return mensajeDescifrado.reverse().join("");
}
 let laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  

let laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  
 */

function reporteDePasajeros(estacion) {
    let cantPasajeros = 200;
    let arreglo = [];
    for(let i = 0; i <= estacion; i++) {
      if(i!==0){
        if(i!==5){
            cantPasajeros = cantPasajeros + 20
            
        } else {
            cantPasajeros = cantPasajeros + 120 - 80
        }
      }
        
      
        
     arreglo.push("En la estación " + i + " hay " + cantPasajeros + " pasajeros arriba del tren");
    }
    return arreglo;
  
  }
    console.log(reporteDePasajeros(5));