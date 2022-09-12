var arrayFilmes = [];
var arrayNomeFilmes = [];

const elementoListaFilmes = document.getElementById("listaFilmes");
const elementoLinkFilme = document.getElementById("filme");
const elementoNomeFilme = document.getElementById("nomeFilme");
const elementoImagemFilme = document.getElementById("imagemFilme");

const filmes = {
    adicionar: function () {
        if (arrayFilmes.includes(elementoLinkFilme.value) || arrayNomeFilmes.includes(elementoNomeFilme.value)){
            alert("Imagem/Nome já existente");
            return;
        }
        elementoListaFilmes.innerHTML = "";
        arrayFilmes.push(elementoLinkFilme.value);
        arrayNomeFilmes.push(elementoNomeFilme.value);
        arrayFilmes.forEach((filme, nome) => {
            const nomes = arrayNomeFilmes[nome];
            elementoListaFilmes.innerHTML += `<div id="${nomes}" class = "imagemFilmes"> <img src =  "${filme}"> <p> ${nomes} </p> </div>`
        });
        elementoLinkFilme.value = "";
        elementoNomeFilme.value = "";
    },
    remover: function () {
        let nomeSelecionado = prompt("Insira o nome"); 
        if(arrayNomeFilmes.includes(nomeSelecionado)) {
            posicaoDoNome = arrayNomeFilmes.indexOf(nomeSelecionado);
            console.log(posicaoDoNome);
            arrayNomeFilmes.splice(posicaoDoNome, 1);
            arrayFilmes.splice(posicaoDoNome, 1);
            var elem = document.getElementById(`${nomeSelecionado}`);
            elem.remove();
        } else {
            alert("Nome não encontrado");
        }
        arrayFilmes.forEach((filme, nome) => {
            const nomes = arrayNomeFilmes[nome];
            elementoListaFilmes.innerHTML += `<div id="imagemFilmes" class = "imagemFilmes"> <img src =  "${filme}"> <p> ${nomes} </p> </div>`
        });
    }
}