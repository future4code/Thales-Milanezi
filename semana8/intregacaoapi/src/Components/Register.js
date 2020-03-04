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

const mockDados = {
    name: '',
    email: ''
}

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
        }

    }
    handleChangeNome = (event) => {
        const newValue = event.target.value;
        this.setState({ name: newValue })
    }
    handleChangeEmail = (event) => {
        const newValue = event.target.value;
        this.setState({ email: newValue })
    }

    handleSaveUser = () => {
        const newUser = {
            name: this.state.name,
            email: this.state.email
        }

        const promiseNewUser = axios.post(`${baseUrl}/users/createUser`, newUser, {
            headers: {
                'api-token': 'Thales',
            }
        })

        promiseNewUser.then(response => {
            alert('Usuario criado com Sucesso!');
        }).catch(error => {
            alert('Usuário não foi cadastrado, tente novamente!')
            console.log(error.response.data.message);
        })
    }





    render() {
        return (
            <MainRegister>
                <Form>
                    <label>Nome:</label>
                    <input type='text'
                        placeholder='Digite seu nome aqui'
                        onChange={this.handleChangeNome}
                        value={this.state.name}
                    />

                    <label>Email:</label>
                    <input type='E-mail'
                        placeholder='Digite seu email aqui'
                        onChange={this.handleChangeEmail}
                        value={this.state.email}
                    />
                    <BtnRegister onClick={this.handleSaveUser}>Cadastrar</BtnRegister>
                </Form>
            </MainRegister>
        )
    }
}

export default Register