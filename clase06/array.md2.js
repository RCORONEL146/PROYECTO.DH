
let peliculas=["Turno de día","30 noches con mi ex","Bestia","El monte","Top gun maverick","Elvis","Thor: amor y trueno"] 
//Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha película y con letras en mayúsculas.
let ultimoelemento= peliculas.pop(); 
peliculas.unshift( mayusculas(ultimoelemento));
console.log(peliculas);
function mayusculas(palabra){
    return palabra.toUpperCase()    
}
//Una vez terminada la actividad, nos indican que debemos crear una cadena de texto para las siguientes películas próximas a estrenar:
let textoNvo=[ "Counter-Strike","NOP","Vértigo","Nick","Avatar"]
// Una vez creada la estructura, una de las programadoras del equipo indica que la primera película incorporada a la estructura no es una película sino un video juego.
//Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura.
let extraerPrimero = textoNvo.shift();
//  Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las
//3 películas, para ello te recomendamos que investigues lo que hace el método concat().
function todasJuntas( peli1,peli2) { 
    return peli1.concat(peli2)
    
}   
console.log(todasJuntas( peliculas,textoNvo)) 
