const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)",
    imagem: "./Sem título.jpeg"    },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.",
    imagem: "./Sem título.jpeg"    },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!",
    imagem: "https://picsum.photos/id/2/300/300"  
  },
]

  let contadorId = 0

  function criarPost(postagem) {
  const article = document.createElement("article");
  contadorId++
  article.id = `post-${contadorId}`; 
  console.log(article)

 
  article.innerHTML = `
    <h3>${postagem.titulo}</h3>
    <p class="subtitulo">${postagem.subtitulo}</p>
    <div class="data">${postagem.data}</div>
    <p>${postagem.texto}</p>
    <img src="${postagem.imagem}"></img>
  
  `;

  return article;
}

const main = document.querySelector("main");

for (let i = 0; i < arrayPostagens.length; i++) {
  const post = criarPost(arrayPostagens[i]); 
  main.appendChild(post);
 
}


// const post01 = document.createElement("article")
// //Manipular elemento
// post01.id = "post-1"
// console.log(post01)



// post01.innerHTML = ` 
// <h3>${arrayPostagens[0].titulo}</h3>
// <p class="subtitulo">${arrayPostagens[0].subtitulo}</p>
// <div class="data">${arrayPostagens[0].data}</div>
// <p>${arrayPostagens[0].texto}</p>
// `
// //Adicionar o elemento a tela/DOM
// const main = document.querySelector("main")
// main.appendChild(post01)


// /////////////////////////////////////////////////////////////////////////////////////////////////////

// const post02 = document.createElement("article")
// //Manipular elemento
// post02.id = "post-2"
// console.log(post02)

// post02.innerHTML = ` 
// <h3>${arrayPostagens[1].titulo}</h3>
// <p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
// <div class="data">${arrayPostagens[1].data}</div>
// <p>${arrayPostagens[1].texto}</p>
// `
// //Adicionar o elemento a tela/DOM
// main.appendChild(post02)

// ///////////////////////////////////////////////////////////////////////////////////////////////////

// const post03 = document.createElement("article")
// //Manipular elemento
// post03.id = "post-3"
// console.log(post03)

// post03.innerHTML = ` 
// <h3>${arrayPostagens[2].titulo}</h3>
// <p class="subtitulo">${arrayPostagens[2].subtitulo}</p>
// <div class="data">${arrayPostagens[2].data}</div>
// <p>${arrayPostagens[2].texto}</p>
// `
// //Adicionar o elemento a tela/DOM
// main.appendChild(post03)


