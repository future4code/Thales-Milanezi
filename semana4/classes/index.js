class Post {
    constructor (titulo, autor, texto){
        this.titulo = titulo
        this.autor = autor
        this.texto = texto
    }
}
let arrayPost =[]
function imprimirPost(){
        event.type === "click"
        let valorTitulo = document.getElementById("titulos").value
        let valorAutor = document.getElementById("autores").value
        let valorNewPost = document.getElementById("areadotexto").value
        let publicar = new Post (valorTitulo, valorAutor, valorNewPost)

        console.log(publicar)
        arrayPost.push(publicar)

        console.log(arrayPost)
        document.getElementById("titulos").value = ""
        document.getElementById("autores").value = ""
        document.getElementById("areadotexto").value = ""
    }
