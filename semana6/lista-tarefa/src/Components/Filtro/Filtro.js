import React, {Component} from 'react'
import styled from 'styled-components'


const MainDoFiltro = styled.span`
display: flex;
justify-content: center;
`


const Stlfiltro = styled.h3`
font-size: 30px;
color: #0B0B61;
margin-right: 30px;

`
const EstiloSelect = styled.select`
height: 30px;
width: 150px;
margin-top: 35px;

`

class Filtro extends Component {
    constructor(props){
        super(props)
        this.state= {
            
        }
    }
    render(){
        return(

            <MainDoFiltro>
                <Stlfiltro>Filtro</Stlfiltro>
                <EstiloSelect> 
                    <option>Nenhum</option>
                    <option>Pendentes</option>
                    <option>Completas</option>
                </EstiloSelect>

            </MainDoFiltro>

        )
    }
}







export default Filtro 