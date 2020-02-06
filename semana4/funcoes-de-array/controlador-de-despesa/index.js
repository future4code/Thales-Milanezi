class DespesaGeral {
        constructor(dinheiro, tipoDespesa, descricao){
        this.dinheiro = dinheiro
        this.tipoDespesa = tipoDespesa
        this.descricao = descricao
    }
}
const listaDespesas =[]

const cadastroDeDespesa = () => {
    let newDinheiro = document.getElementById("dinheiro").value
    let newTipo = document.getElementById("selecionar-tipo").value
    let newdescricao = document.getElementById("descricao").value

    if (newDinheiro ==="" && newTipo ==="" && newdescricao ===""){
        alert("Todos os campos devem ser preenchidos, por favor !!")
    } else{
        let novoCadastroDespesa = new DespesaGeral(newDinheiro, Newtipo, newDescricao)
        listaDespesas.push(novoCadastroDespesa)

        document.getElementById("dinheiro").value = ""
        document.getElementById("selecionar-tipo").value = ""
        document.getElementById("descricao").value = ""

        const imprimirtudo = listaDespesas
    console.log(imprimirtudo)

    } 
   

}