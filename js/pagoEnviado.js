// console.log("Hola WEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");

// var queryString = window.location.search;

// // Elimina el signo de interrogación al principio de la cadena de consulta
// queryString = queryString.slice(1);

// // Divide la cadena de consulta en pares de nombre y valor separados por "&"
// var params = queryString.split("&");

// // Crea un objeto para almacenar los parámetros y sus valores
// var queryParams = {};
// for (var i = 0; i < params.length; i++) {
//     var parts = params[i].split("=");
//     var name = decodeURIComponent(parts[0]);
//     var value = decodeURIComponent(parts[1]);
//     queryParams[name] = value;
// }
// // Accede al valor del parámetro "nombre"
// debugger;
// // var nombre = queryParams.nombre;
// var txtNombre = document.getElementById("txtNombre");
// console.log(txtNombre);
// txtNombre.innerHTML = "maricon";

(function($) {

    "use strict";

    var Init = function() {
        var txtNombre = document.getElementById("txtNombre");
        var txtMonto = document.getElementById("txtMonto");
        var txtEmailEnviado = document.getElementById("txtEmailEnviado");
        var txtRangoTiempo = document.getElementById("txtRangoTiempo");
        var txtMoneda = document.getElementById("txtMoneda");
        // debugger;
        var queryString = window.location.search;
        // var moneda = txtMoneda.innerHTML;
        // Elimina el signo de interrogación al principio de la cadena de consulta
        queryString = queryString.slice(1);

        // Divide la cadena de consulta en pares de nombre y valor separados por "&"
        var params = queryString.split("&");

        // Crea un objeto para almacenar los parámetros y sus valores
        var queryParams = {};
        for (var i = 0; i < params.length; i++) {
            var parts = params[i].split("=");
            var name = decodeURIComponent(parts[0]);
            var value = decodeURIComponent(parts[1]);
            queryParams[name] = value;
        }
        // Accede al valor del parámetro "nombre"
        if (queryParams.nombre === "" || queryParams.nombre === undefined || queryParams.nombre === null) {
            txtNombre.innerHTML = queryParams.emailUsername;
        } else {
            txtNombre.innerHTML = queryParams.nombre;
        }
        txtMonto.innerHTML = queryParams.monto;
        txtEmailEnviado.innerHTML = queryParams.emailUsername;
        txtRangoTiempo.innerHTML = queryParams.rangoTiempo;
        txtEmailUserVer.innerHTML = queryParams.emailUsername;
        txtMoneda.innerHTML = queryParams.moneda;
        // txtMoneda.innerHTML
        // var sNombre = queryParams.nombre;
        // var sNombre = queryParams.nombre;
        // var sNombre = queryParams.nombre;
    };
    Init();
})(jQuery);