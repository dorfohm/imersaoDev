var valor = document.querySelector("#valor");
var resultado = document.querySelector("#resultado");
var convertido = 0;
var conversor = {
    converterF: function () {
        convertido = (valor.value) * 9/5 + 32;
        console.log(convertido);
        resultado.innerHTML = "A temperatura convertida em Fahrenheit é: " + convertido + "°F";
    },
    converterK: function () {
        convertido = Number(valor.value) + 273.15;
        console.log(convertido);
        resultado.innerHTML = "A temperatura convertida em Kelvin é: " + convertido + "°K";
    }
}

