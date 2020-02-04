/*function addSemanas (dias){
    const container = document.getElementById("maincontainer")
    for(let i=0; i < dias; i++)
    container.innerHTML += "<p>Segunda-Feira</p>"
}
*/
const containerPrincipal = document.getElementById("main-container")

containerPrincipal.innerHTML += "<p class='configText' id='taskSeg'>Segunda - Feira</p>"
containerPrincipal.innerHTML += "<p class='configText' id='taskTer'>Terça - Feira</p>"
containerPrincipal.innerHTML += "<p class='configText' id='taskQua'>Quarta - Feira</p>"
containerPrincipal.innerHTML += "<p class='configText' id='taskQui'>Quinta - Feira</p>"
containerPrincipal.innerHTML += "<p class='configText' id='taskSex'>Sexta - Feira</p>"
containerPrincipal.innerHTML += "<p class='configText' id='taskSab'>Sábado</p>"
containerPrincipal.innerHTML += "<p class='configText' id='taskDom'>Domingo</p>"

/*const containerHead =document.getElementById("head-container")

containerHead.innerHTML += "<input type='text'>"
containerHea.innerHTML += `<select name='dias da semana'>
<option value='Segunda-Feira'>Segunda-Feira</option>
<option value='Terça-Feira'>Terça-Feira</option>
<option value='Quarta-Feira'>Quarta-Feira</option>
<option value='Quinta-Feira'>Quinta-Feira</option>
<option value='Sexta-Feira'>Sexta-Feira</option>
<option value='Sábado'>Sábado</option>
<option value='Domingo'>Domingo</option> 
</select>`
containerHead.innerHTML+= "<button>Adicionar tarefa</button>"
*/
function  addTarefas(){
    const input = document.getElementById("tarefa").value
    const armazenar = document.querySelector("select").value
     console.log(armazenar)
    if(input ===""){
        alert("insira uma tarefa, please!")
    } else{
    const segunda = document.getElementById("taskSeg")
    const terca = document.getElementById("taskTer")
    const quarta = document.getElementById("taskQua")
    const quinta = document.getElementById("taskQui")
    const sexta = document.getElementById("taskSex")
    const sabado = document.getElementById("taskSab")
    const domingo =document.getElementById("taskDom")

    segunda.innerHTML += "<p>"+ input +"</p>"  
    terca.innerHTML += "<p>"+ input +"</p>"
    quarta.innerHTML += "<p>"+ input +"</p>"
    quinta.innerHTML += "<p>"+ input +"</p>"
    sexta.innerHTML += "<p>"+ input +"</p>" 
    sabado.innerHTML += "<p>"+ input +"</p>"
    domingo.innerHTML += "<p>"+ input +"</p>"
    

    } 
}
