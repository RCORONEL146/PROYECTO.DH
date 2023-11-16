//            Clase04 07-09-2023 
// Micro desafio N°2 "Ajuste tarifario de energía eléctrica."  
let pagoMes = 300
let consumoKWH = 4500
let pagoactual = consumoKWH > 300 ? pagoMes*1.2 : pagoMes;

console.log (`Debido a que su hogar tuvo un consumo de ${consumoKWH} , en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%) 
y cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoactual}`)   

