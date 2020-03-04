import React, { Component } from 'react'
import styled from 'styled-components'
import axios from "axios"


 const MainRegister = styled.div`
 border: 1pt solid black;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding:10px;
 margin:20px;
 `
 const BtnRegister = styled.button`
 background-color:lightblue;
 font-size:20px;
 `

 const Form = styled.form`
 display:flex;
 flex-direction:column;

 `

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const authToken = 'Thales';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mostraLista: false
        }

    }

    CreateNewUser = () => {
        const Novorequest = axios.post(`${baseUrl}/users/createUser`, {
            Headers: {
                'api-token': authToken 
            }
        }
      ); 

        Novorequest.then((response) => {
            window.alert("Usuário Cadastrado com Sucesso")
        }). catch((error) =>{
            window.alert("não foi possivel cadastrar o novo usuário, tente novamente !")
        })

    }


    render(){
        return(
            <MainRegister>
                <Form>
                <label>Nome:</label>
                <input type='text' placeholder='Digite seu nome aqui'/>
                <label>Email:</label>
                <input type='text' placeholder='Digite seu email aqui'/>
                <BtnRegister onClick=''>Cadastrar</BtnRegister>
                </Form>
            </MainRegister>
        )
    }
}

export default Register