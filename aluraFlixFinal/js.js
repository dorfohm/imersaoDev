var listaFilmes = ["https://br.web.img3.acsta.net/medias/nmedia/18/85/94/86/20078371.jpg", "https://animefire.net/img/animes/claymore-large.webp?v=1", "https://images-na.ssl-images-amazon.com/images/I/51Mm5G4Z6gL._SX372_BO1,204,203,200_.jpg"];

const elementoExibir = document.getElementById("exibir");

listaFilmes.forEach(element => {
    elementoExibir.innerHTML += `<img src =  "${element}">`
})

const filmes = {
    adicionar: function () {
        
        let nomeFilme = window.prompt("Insira o nome do filme");
        let linkFilme = window.prompt("Insira o link do filme");
        if (listaFilmes.includes(prompt)){
            alert("Imagem já existente");
            return;
        } //Milagre
        exibir.innerHTML = "";
        listaFilmes.push(linkFilme);
        listaFilmes.forEach(element => {
            exibir.innerHTML += `<img src =  "${element}">`
        })
    }
}



//Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos... - Feito
//Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente - Feito
//Criar um campo e botão para adicionar a imagem pela tela, e não direto no código - Feito
