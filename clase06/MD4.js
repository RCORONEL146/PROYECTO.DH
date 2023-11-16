//         Clase04 07-09-2023 
//          Micro desafio N°4 "mi primera calculadora" 
let valor1 = 2
let valor2 = 3
let operacion = "resta"

switch (operacion) { 
    case "sumar":
        let resultado = valor1+valor2 
        console.log(`El resultado de sumar  ${valor1} + ${valor2} es ${resultado}`);
        break;
    case "resta":
    let resultado2 = valor1-valor2           
        console.log(`El resultado de resta  ${valor1} - ${valor2} es ${resultado2}`);
        break;   

     case "multiplicar":
    let resultado3 = valor1*valor2     
    console.log(`El resultado de la multiplicaciion  ${valor1} * ${valor2} es ${resultado3}`);  
    break;

    case "dividir":
    let resultado4 = valor1/valor2
    console.log(`El resultado de la division   ${valor1} / ${valor2} es ${resultado4}`);
    break

    default:
        console.log("Las operaciones aceptadas son: sumar-restar- multiplicar- dividir")
        break;
}