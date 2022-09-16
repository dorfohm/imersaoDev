var carta1 = {
    nome: "Bulbassaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
    forca: 10000,
    ataque: 7000,
    defesa: 2000,
    agilidade: 50 
    }
};
var carta2 = {
    nome: "Venusaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    atributos: {
    forca: 30000,
    ataque: 2000,
    defesa: 1000,
    agilidade: 30 
    }
};
var carta3 = {
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
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
var contador = 0;
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
    exibirCartaJogador();
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function selecionarUmAtributo(){ 
    while(contador<1){
        document.getElementById("btnJogar").disabled = false;
        contador++;
    }   
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:inherit; height:inherit; position:absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type = 'radio' onclick = 'selecionarUmAtributo()' name = 'atributo' value ='"+atributo+"'>"+atributo+" "+cartaJogador.atributos[atributo]+"<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:inherit; height:inherit; position:absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status' >"
    var opcoesTexto = "";
    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type = 'text' style='margin-top: 15px; margin-bottom: 15px;' onclick = 'selecionarUmAtributo()' name = 'atributo' value ='"+atributo+"'>"+atributo+" "+cartaMaquina.atributos[atributo]+"</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
}
