/* const fs = require('fs');
function importar(marca){
    switch(marca){
        case 'Star Wars':
           return JSON.parse(fs.readFileSync('./datos/figuras3.json','utf-8'));
            
        case "Hot Toys":
            return JSON.parse(fs.readFileSync('./datos/figuras2.json','utf-8'));
            
        case "Bandai":
            return JSON.parse(fs.readFileSync('./datos/figuras1.json','utf-8'));
            

    }
}
//console.log(importar("Bandai"));
module.exports = importar; */
let concesionaria = {
    autos: autosImportados, 
  
    buscarAuto: function (patente) {
      
      const autoEncontrado = this.autos.find((auto) => auto.patente === patente);
      return autoEncontrado ? autoEncontrado : null;
    },
  
    venderAuto: function (patente) {
      
      const auto = this.buscarAuto(patente);
      if (auto) {
        auto.vendido = true;
      }
    },
  
    autosParaLaVenta: function () {
      
      return this.autos.filter((auto) => !auto.vendido);
    },
  };