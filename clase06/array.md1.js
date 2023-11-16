 let productos=["heladera", "cocina","lavarropa","televisor","cafetera","tostadora"];
 //1- Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
 console.log("-El electrodomestico sellecionado es la ", productos[0]);
// 2-Extraer el primer elemento del array y agregarlo al final del mismo.
let extraerPrimero = productos.shift();
let agregoFinal= productos.push(extraerPrimero) 
console.log("--Extraer el primer elemento del array y agregarlo al final del mismo----",productos);

//3-Agregar al final del array dos (2) nuevos productos.
let agrego1=productos.push("PS4","PS5");

console.log("Agregar al final del array dos 2 nuevos productos",productos );
//4-Mostrar por la consola la cantidad de elementos que contiene el array.
let cantidad= productos.length
console.log( "---la cantidad de elementos que contiene el array es",cantidad);
//5-Buscar un elemento del array
let bucar=productos.indexOf("heladera")
if (bucar==-1) { 
    console.log("-----Producto encontrado");
    
} else {
    console.log("-----El producto buscado no existe");
}
//6- Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
let separar=productos.join(" " )
console.log( "------ Vamos a separar //", separar);

//7-Determinar la cantidad de elementos que posee la cadena de texto obtenida.
separar.length
console.log("-------La cantidad nuevade array es:",separar.length );

// 8-Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
let cambiarProducto= separar.replace("cafetera","PCGAMER"); 
console.log("-------se realizo el cambio", cambiarProducto);

//9-Con la cadena de texto obtenida generar un nuevo array con cada una de las palabrasde la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.
separar.split(" ")
console.log( "separados por una coma",separar.split(" ") );