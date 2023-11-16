//              Clase04 07-09-2023  
//          Micro desafio N°1 "ADMINISTRADOR"  
       
 let perfil = "INVITADO" 
 switch (perfil){
    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador":
        console.log("Usted tiene todos los privilegios deuso del sistema") 
        break;
   case "asistente":
   case "ASISTENTE":
   case "Asistente":
    console.log( "Usted sólo tiene permisos de registrar, modificar y consultar datos")  
    break; 
   case "Invitado":
   case "INVITADO":
   case "Invitado":
    console.log ("Usted sólo tiene permisos de registrar, modificar y consultar datos")
    break;
 default: 
 console.log("Debe especificar un perfil válido")}