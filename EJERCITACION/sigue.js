// sigue asi
let perfil = "asistente"
switch (perfil) {
    case "Administrador" :
    case "ADMINISTRADOR" :
    case "administrador" :
        console.log("Usted tiene todos los privilegios de uso del sistema" ); 
        break;
    case "ASISTENTE" :
    case "Asistente" :
    case "asistente" :
        console.log( "son todos topos vagos"+ "  "+ "y la hacen a tu sra");   
        break;
    case "INVITADO" :
    case "Invitado" :
    case "invitado" :
    console.log( "hagan se culia");
    break;
    default:
    console.log( "vete a tu casa");                       
        
}