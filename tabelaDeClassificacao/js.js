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

const funcoes = {
    calculaPontos: function(jogador) {
        var pontos = (jogador.vitorias * 3) + jogador.empates;
        return pontos;
    }
}

rafa.pontos = funcoes.calculaPontos(rafa);

console.log(rafa);