var arrayFilmes = [];
var arrayNomeFilmes = [];

const elementoListaFilmes = document.getElementById("listaFilmes");
const elementoNomeFilme = document.getElementById("nomeFilme");
const elementoLinkFilme = document.getElementById("filme");

const filmes = {
    adicionar: function () {
        if (arrayFilmes.includes(elementoLinkFilme.value.trim()) || arrayNomeFilmes.includes(elementoNomeFilme.value.trim())){
            alert("Imagem/Nome já existente");
            return;
        }
        elementoListaFilmes.innerHTML = "";
        arrayFilmes.push(elementoLinkFilme.value);
        arrayNomeFilmes.push(elementoNomeFilme.value);
        arrayFilmes.forEach((filme, index) => {
            const nome = arrayNomeFilmes[index];
            elementoListaFilmes.innerHTML += `<div id="${nome}"> <img src =  "${filme}"> <p> ${nome} </p> </div>`
        });
        elementoLinkFilme.value = "";
        elementoNomeFilme.value = "";
    },
    remover: function () {
        let nomeSelecionado = prompt("Insira o nome"); 
        if(arrayNomeFilmes.includes(nomeSelecionado)) {
            posicaoDoNome = arrayNomeFilmes.indexOf(nomeSelecionado);
            arrayNomeFilmes.splice(posicaoDoNome, 1);
            arrayFilmes.splice(posicaoDoNome, 1);
            document.getElementById(`${nomeSelecionado}`).remove();
        } else {
            alert("Nome não encontrado");
        }
        elementoListaFilmes.innerHTML = "";
        arrayFilmes.forEach((filme, index) => {
            const nome = arrayNomeFilmes[index];
            elementoListaFilmes.innerHTML += `<div id="${nome}"> <img src =  "${filme}"> <p> ${nome} </p> </div>`
        });
    }
}