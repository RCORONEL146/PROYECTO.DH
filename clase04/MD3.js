//         Clase04 07-09-2023  
// Micro desafio N°3 "traductor condicional."  
let palabra = "gato"
switch (palabra) {
    case "perro":
        console.log("dog");
        break;
    case "gato":
    console.log( "cat");
    break;
    case "puerta":
        console.log("door"); 
        break;
    case "ventana":
    console.log("window"); 
    break;
    case "mesa":
    console.log("table");
    break
    default: console.log("La palabra ingresada es incorrecta");
        break;
}