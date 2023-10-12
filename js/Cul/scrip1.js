function convertir(valor, unidadOrigen, unidadDestino) {
    var numero = parseFloat(valor);

    var factores = {
        "km": 1000,
        "hm": 100,
        "dam": 10,
        "m": 1,
        "dm": 0.1,
        "cm": 0.01,
        "mm": 0.001,
    };

    var factor = factores[unidadDestino] / factores[unidadOrigen];
    var resultado = numero * factor;
    return resultado;
}
function convertir(valor, unidadOrigen, unidadDestino) {
    var numero = parseFloat(valor);

    var factores = {
        "km": 1000,
        "hm": 100,
        "dam": 10,
        "m": 1,
        "dm": 0.1,
        "cm": 0.01,
        "mm": 0.001,
    };

    // Convertimos el valor ingresado a metros
    var valorEnMetros = numero * factores[unidadOrigen];

    // Luego convertimos el valor en metros a la unidad destino
    var resultado = valorEnMetros / factores[unidadDestino];
    return resultado;
}
