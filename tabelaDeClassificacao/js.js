var rafa = {
    nome:"Rafa",
    vitorias:2,
    empates:1,
    derrotas:1,
    pontos:0
}
var paulo = {
    nome:"Paulo",
    vitorias:1,
    empates:1,
    derrotas:2,
    pontos:0
}
var jogadores = [rafa, paulo];
const funcoes = {
    calculaPontos: function(jogador) {
        var pontos = (jogador.vitorias * 3) + jogador.empates;
        return pontos;
    },
    exibeJogadoresNaTela: function(jogadores) {
       var elemento = ""
       for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onclick='funcoes.adicionarVitoria("+i+")'>Vitória</button</td>"
        elemento += "<td><button onclick='funcoes.adicionarEmpate("+i+")'>Empate</button</td>"
        elemento += "<td><button onclick='funcoes.adicionarDerrota("+i+")'>Derrota</button</td>"
        elemento += "</tr>"
        }
        var tabelaJogadores = document.getElementById("tabelaJogadores");
        tabelaJogadores.innerHTML = elemento;
    },
    adicionarEmpate: function(i) {
        jogadores.forEach(jogador => {
            jogador.empates++;
        });
        funcoes.exibeJogadoresNaTela(jogadores);
    },
    adicionarVitoria: function(i) {
        var totalDerrotas = 0;
        var totalEmpates = 0;
        var totalGeral = 0; 
        jogadores.forEach(jogador => {
            totalDerrotas += jogador.derrotas;
            totalEmpates += jogador.empates;
            totalGeral = totalDerrotas + totalEmpates;
        })       
        if(jogadores[i].vitorias<totalGeral){
            jogadores[i].vitorias++;           
        }else {
            alert("A quantidade de vitórias não pode ser maior do que a soma de derrotas e empates");
        } 
        console.log(totalGeral);     
        funcoes.exibeJogadoresNaTela(jogadores);
    },
    adicionarDerrota: function(i) {     
        console.log(jogadores[i]);           
        jogadores[i].derrotas++;  
        funcoes.exibeJogadoresNaTela(jogadores);
    },
    limparPontos: function() {
        jogadores.forEach(jogador => {
            jogador.vitorias = 0;
            jogador.empates = 0;
            jogador.derrotas = 0;
            jogador.pontos = 0;
        }); 
        console.log(jogadores);
        funcoes.exibeJogadoresNaTela(jogadores);      
    }
}
funcoes.exibeJogadoresNaTela(jogadores);
console.log(rafa);