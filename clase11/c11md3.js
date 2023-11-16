let numeros = [0,1,2,3,4,5,6,7,8,9];
let [posicionCero,,posicionDos,,posicionCuatro] = numeros;
let [,posicionUno, ,posicionTres,,...resto] = numeros;
let restoDeNumeros = [posicionUno,posicionTres,...resto];
console.log(restoDeNumeros);

let mascota = {
    nombre: "Bony",
    tipoDeMascota: "Perro",
    color: "Dorado",
    raza: "Golden Retriever"
}

//let  { nombre: nombre2, tipo, color, raza } = mascota;
let  { nombre, tipoDeMascota, color, raza } = mascota;
console.log('Hola les presento a mi mascota su nombre es: '+ nombre +', es un hermoso '+tipoDeMascota+', de color: '+color+' y su raza es: '+raza+'.');