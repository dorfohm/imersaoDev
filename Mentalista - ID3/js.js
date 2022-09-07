const mentalista = {

    numeroSecreto: parseInt(Math.random() * 11),
    cliques: 3,
    tentativas:3,
    variavel:0,

    Chutar: function () {
        var chute = parseInt(document.getElementById("valor").value);      
        if(chute == this.numeroSecreto){
            resultado.innerHTML = "Você acertou!" + "<br>" + "Recarregando a página em cinco segundos...";
            this.variavel = chute;
            setTimeout(function(){
                window.location.reload(1);
             }, 5000);
        }
        else if(chute > 10 || chute <0){
            this.variavel = chute;
            resultado.innerHTML = "Você deve digitar um número entre 0 e 10";
        }
        else if(chute > this.numeroSecreto){
            this.variavel = chute;
            resultado.innerHTML = "O número secreto é menor que " + chute;
        }
        else if(chute < this.numeroSecreto){
            this.variavel = chute;
            resultado.innerHTML = "O número secreto é maior que " + chute;
        }
        console.log(this.numeroSecreto);
    },
    //Verificando se o usuário não apertou diversas vezes o botão após acertar o número
    Precoce: function () {
        this.cliques--;
        if (this.cliques < 0 && this.variavel == this.numeroSecreto){
            alert("Vai com calma ai no clique parça");
        }
    },
    //Contador de tentativas
    Contador: function () {
        this.tentativas--;
        if (this.tentativas == 0 && this.variavel != this.numeroSecreto){
            alert("Suas tentativas acabaram, o número secreto era: " + this.numeroSecreto + "\n" + "A página será recarregada ao pressionar no OK");
            window.location.reload();
        }
    }   
}



//Definir número de tentativas - Feito
//Exibir quando errou se o número secreto é maior ou menor -- Feito