var carta1 = {
    nome: "Bulbassaur",
    imagem: "http://4.bp.blogspot.com/-m4bEdJ5cCtI/VN-EdMQiq3I/AAAAAAAABFY/AywDiBRXkR0/s1600/1%2BBulba.png",
    atributos: {
    forca: 10000,
    ataque: 7000,
    defesa: 2000,
    agilidade: 50 
    }
};
var carta2 = {
    nome: "Venusaur",
    imagem: "http://2.bp.blogspot.com/-6Fy_orFYrOU/VN-E3waHrZI/AAAAAAAABHw/2Ei8NMRWZxQ/s1600/3%2BVenu.png",
    atributos: {
    forca: 30000,
    ataque: 2000,
    defesa: 1000,
    agilidade: 30 
    }
};
var carta3 = {
    nome: "Charmander",
    imagem: "http://4.bp.blogspot.com/-CtPFJZM_pVE/VN-FFOKeuLI/AAAAAAAABJA/cOCGqfwaBO4/s1600/4%2BChar.png",
    atributos: {
    forca: 25000,
    ataque: 5000,
    defesa: 7000,
    agilidade: 35 
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina = 0;
var cartaJogador = 0;

const elementoExibir = document.getElementById("cartaSorteada");

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while(numeroCartaJogador == numeroCartaMaquina){
        var numeroCartaMaquina = parseInt(Math.random() * 3)      
    } 
    cartaJogador = cartas[numeroCartaJogador]; 
    console.log(cartaJogador);
     
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    elementoExibir.innerHTML += `<img src =  "${cartaJogador.imagem}">`


    exibirOpcoes();
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type = 'radio' name = 'atributo' value = ' " + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    console.log(cartaJogador.atributos[atributoSelecionado]);
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    if (valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu!"
    } else if(valorCartaMaquina > valorCartaJogador){
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior"
    } else {
        elementoResultado.innerHTML = "Empatou"
    }
}