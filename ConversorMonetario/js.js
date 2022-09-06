const conversor = {
    converterParaReais: function () {
        var valorElemento = document.querySelector("#valor");
        var valor = valorElemento.value;
        var valorConvertido = parseFloat(valor);
        var valorEmReais = valorConvertido * 5;
        valorConvertidoHTML.innerHTML = "O valor em reais é R$ " + valorEmReais;
    },
    converterParaBitcoin: function () {
        var valorElemento = document.querySelector("#valor");
        var valor = valorElemento.value;
        var valorConvertido = parseFloat(valor);
        var valorEmBitcoin = valorConvertido * 0.000050;
        valorConvertidoHtmlBitcoin.innerHTML = "O valor em bitcoins é ₿ " + valorEmBitcoin;
    },
    converterParaEuro: function () {
        var valorElemento = document.querySelector("#valor");
        var valor = valorElemento.value;
        var valorConvertido = parseFloat(valor);
        var valorEmEuro = valorConvertido * 1.01;
        valorConvertidoHTML.innerHTML = "O valor em euros é € " + valorEmEuro;
    }
}

//Calcular nesse conversor o valor de doláres para bitcoins - Feito
//Adicionar um botão converter para Euro - Feito
//Conversor de quilômetros para anos-luz
//Conversor de temperatura F°, C°, K° - Em execução