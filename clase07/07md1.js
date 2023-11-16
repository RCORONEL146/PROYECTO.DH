/*
    Microdesafio 1 - 19 Septiembre 2023
    Alejandra Dominguez
    Ricardo Coronel
    Jose Martin Guzman Olivera
    Luana Capilla
    Anriquez Atia Walter Martin
*/

//Array que contiene los movimientos de la cuenta bancaria
let movimientos = [1000,-6000,4000,-7000,-2000,50000];
let nombre = "Gloria";
let apellido = "Medina";

//Funcion que recibe un arreglo y retorna el saldo de los movimientos
function calcularSaldo(movimientos){
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    for(let i = 0; i<movimientos.length; i++){
        if(movimientos[i] >= 0){
            saldoDepositos = saldoDepositos + movimientos[i];
        }else{
            saldoRetiros = saldoRetiros + movimientos[i];
        }
    }
    //saldoActual = saldoDepositos - saldoRetiros;
    //return [saldoDepositos, saldoRetiros, saldoActual];
    return [saldoDepositos, saldoRetiros, (saldoDepositos-(-saldoRetiros))];
}

//El parámetro funcion es el callBack...
function mostrarResultados(nombre, apellido, movimientos, funcion){
    let saldos = funcion(movimientos); //invoco al calback...
    // console.log(`Estimada ${nombre} ${apellido}: \nEl monto total de los depósitos es de: ${saldos[0]}.\nEl monto total de los retiros es de: ${saldos[1]}.\nPor lo tanto, su saldo actual en la cuenta es de: ${saldos[2]}`);
    return (`Estimada ${nombre} ${apellido}: 
El monto total de los depósitos es de: ${saldos[0]}.
El monto total de los retiros es de: ${saldos[1]}.
Por lo tanto, su saldo actual en la cuenta es de: ${saldos[2]}`);
}

//console.log(mostrarResultados(nombre,apellido,movimientos,calcularSaldo) + '\n' +'Hola mundo');
console.log(`${mostrarResultados(nombre,apellido,movimientos,calcularSaldo)}
Hola`);
// console.log(mostrarResultados(nombre,apellido,movimientos,"Hola mundo"));


