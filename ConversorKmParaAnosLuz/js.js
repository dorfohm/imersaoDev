const conversor = {
    converterParaAnosLuz: function () {
        var valorElemento = document.querySelector("#valor");
        var valor = valorElemento.value;
        var valorConvertido = parseFloat(valor);
        var valorEmAnosLuz = valorConvertido * 0.00000000000011;
        valorConvertidoHTML.innerHTML = "A distância em anos-luz é " + valorEmAnosLuz;
    }
}

//Calcular nesse conversor o valor de doláres para bitcoins - Feito
//Adicionar um botão converter para Euro - Feito
//Conversor de quilômetros para anos-luz - Feito
//Conversor de temperatura F°, C°, K° - Em execução