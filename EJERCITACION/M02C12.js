const autosImportados = require("./autos");

let concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        let autoEncontrado = this.autos.find((auto) => auto.patente == patente);
        if (autoEncontrado) {
            return autoEncontrado
        }
        return null

    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        if (auto) {
            return auto.vendido = true;
        }
    },
    autosParaLaVenta: function () {
        return this.autos.filter((auto) => auto.vendido == false);
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter((auto) => auto.km < 100);
    },
    listaDeVentas: function () {
        let autosVendidos = this.autos.filter((auto) => auto.vendido == true);
        return autosVendidos.map((auto) => auto.precio);
    },

    totalDeVentas: function () {
        return this.listaDeVentas().reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },

    puedeComprar: function (auto, persona) {
        let pagoPorCuotaDelAuto = auto.precio / auto.cuotas;
        if (
            persona.capacidadDePagoEnCuotas >= pagoPorCuotaDelAuto &&
            persona.capacidadDePagoTotal >= auto.precio
        ) {
            return true;
        } else {
            return false;
        }
    },
    autosQuePuedeComprar: function (persona) {
        return this.autosParaLaVenta().filter((auto) =>
            this.puedeComprar(auto, persona)
        );
    },
};

TEST
 console.log(concesionaria.buscarAuto('APL123')); //lo encuentra
 console.log(concesionaria.buscarAuto('APL12112313')); // null

 console.log(concesionaria.venderAuto('APL123')); //true

console.table(concesionaria.autosParaLaVenta());

 console.table(concesionaria.autosNuevos());

 console.table(concesionaria.listaDeVentas());


 console.table(concesionaria.totalDeVentas());