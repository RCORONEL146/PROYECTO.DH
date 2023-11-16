function alquiler(tipo,dias,sillaBebe) {
let monto=0 ;  
switch (tipo.toLowerCase()) {
    case "compacto":
        monto=monto+(14000*dias);
        break;
    case "mediano":
        monto=monto+(17000*dias);
        break;
    case "camioneta":
        monto=monto+(28000*dias);
        break;   
    default:
        console.log( "no has elegido bien");
        break;
    }   

     if (sillaBebe=="si") {
        monto=monto+(1200*dias);
        
     } else {
        console.log( "no quiere silla raton" );              
     }   
     console.log("Estimado cliente: en base al "+tipo+" de vehículo compacto alquilado, considerando los "+dias+" dias utilizados, el monto total a pagar es de $"+monto)
     

    
}
alquiler("compacto",5,"si")