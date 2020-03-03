import React, {Component} from 'react'
import styled from 'styled-components'


const Botao = styled.button`
font-size: 18px;
color: #170B3B;
border-radius:50%;
`
const CaixaTexto = styled.input`
border: 2px solid black;
`

class InputEBotao extends Component {
    constructor(props){
        super(props)
        this.state={
            textotarefas:'',
            textoNovo:"" ,
             adicionarTarefas: []
        }
    }

OnclickAdicionar = (event) => {
 const novoTextoTarefa = event.target.value
 this.setState({
     textotarefas: novoTextoTarefa
 })
}

ArrayDeTarefas = () =>{
    const novoAddTarefa = this.state.textoNovo
    const listaArray =[...this.state.adicionarTarefas, novoAddTarefa]
    this.setState({textoNovo: listaArray})
}
    render() {
        return(

            <div>
                <label>
                    <CaixaTexto onChange={this.state.OnclickAdicionar} value={this.textoNovo} />
                    <Botao onClick={this.state.ArrayDeTarefas}>Adicionar</Botao>
                </label>
            </div>

        )
    
}
}







export default InputEBotao
