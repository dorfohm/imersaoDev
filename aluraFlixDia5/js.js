var arrayFilmes = ["https://br.web.img3.acsta.net/medias/nmedia/18/85/94/86/20078371.jpg", "https://animefire.net/img/animes/claymore-large.webp?v=1", "https://images-na.ssl-images-amazon.com/images/I/51Mm5G4Z6gL._SX372_BO1,204,203,200_.jpg"];
var arrayNomeFilmes = ["teste","teste","teste"];

const elementoListaFilmes = document.getElementById("listaFilmes");
const elementoLinkFilme = document.getElementById("filme");
const elementoNomeFilme = document.getElementById("nomeFilme");

for (var i = 0; i < arrayNomeFilmes.length; i++) {
    elementoListaFilmes.innerHTML += `<img src =  "${arrayFilmes[i]}">`;
    elementoListaFilmes.innerHTML += `<p> ${arrayNomeFilmes[i]} </p>`;
}

arrayNomeFilmes.forEach(element => {
    elementoTextoImagem.innerHTML += element
})

const filmes = {
    adicionar: function () {
        if (arrayFilmes.includes(elementoLinkFilme.value)){
            alert("Imagem já existente");
            return;
        } //Milagre
        elementoListaFilmes.innerHTML = "";
        arrayFilmes.push(elementoLinkFilme.value);
        arrayFilmes.forEach(element => {
            elementoListaFilmes.innerHTML += `<img src =  "${element}">`
        })
    }
}



//Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos... - Feito
//Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente - Feito
//Criar um campo e botão para adicionar a imagem pela tela, e não direto no código - Feito
