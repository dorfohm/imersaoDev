var nome = "Guilherme";
var notaDoPrimeiroBimestre = "9";
var notaDoSegundoBimestre = "7";
var notaDoTerceiroBimestre = "4";
var notaDoQuartoBimestre = "2";
var notaFinal = [notaDoPrimeiroBimestre, notaDoSegundoBimestre, notaDoTerceiroBimestre, notaDoQuartoBimestre];
var mediaNotaFinal = 0;
var notaConvertida0 = 0;
var notaConvertida1 = 0;
var notaConvertida2 = 0;
var notaConvertida3 = 0;

for(i=0; i<4; i++) {
  notaFinal[i] = Number(notaFinal[i])
  mediaNotaFinal += notaFinal[i]
  var notaConvertida0 = notaFinal[0];
  var notaConvertida1 = notaFinal[1];
  var notaConvertida2 = notaFinal[2];
  var notaConvertida3 = notaFinal[3];
}

mediaNotaFinal = (mediaNotaFinal/4).toFixed(1)

console.log("Bem vindo " + nome)
console.log(mediaNotaFinal)

function mediaNotaFinalFuncao() {
    var resultado = "";
    if(mediaNotaFinal >= 6) {
        resultado = "Você foi aprovado";       
    } else {
        resultado = "Você foi reprovado"; 
    }
    return resultado;
}

var exibir = document.querySelector("#resultado")

exibir.innerHTML = ("Bem vindo " + nome) + "<br>" + "Sua média é : " + mediaNotaFinal + "<br>" + mediaNotaFinalFuncao();

console.log("Bem vindo " + nome + "\n" + (mediaNotaFinalConsole = (notaConvertida0 + notaConvertida1 + notaConvertida2 + notaConvertida3)/4) + "\n" + mediaNotaFinalFuncao())


//Desafios
//Só somar os valores e pegar os resultados depois - Feito
//Exibir se alguém foi aprovado ou reprovado acima de 6 - Feito
//Criar tudo dentro do console.log ao invés de separar - Feito
//Trocar imagem, estilizar o fundo - Feito
//Tentar escrever na página o que esta escrito no console - Feito
//Criar um conversor de temperatura - Feito