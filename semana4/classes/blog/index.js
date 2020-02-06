class Post {
    constructor (titulo, autor, texto){
        this.titulo = titulo
        this.autor = autor
        this.texto = texto
    }
}

const ArrayPost = []

const NovoPost criarPost = () => {
  let novoTitulo = document.getElementsById("titulo").value
  let novoAtores = document.getElementsById("atores").value
  let novoConteudo = document.getElementsById("areadotexto").value
  let novapublicacao = new Post(novoTitulo, novoAtores, novoConteudo)

  console.log(novapublicacao)
  ArrayPost.push(novapublicacao)
  console.log(ArrayPost)
}
