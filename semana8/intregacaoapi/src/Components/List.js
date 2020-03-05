import React, {Component} from "react"
import styled from "styled-components"
import axios from "axios"
import ItemList from "./ItemList";


const MainList = styled.ul`
list-style:none;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

const mockLista = [
    {
        id: "1",
        name: 'Thales'
    },
    {
        id: "2",
        name: 'Jessica'
    }
]

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userList: []
        }
    }

    searchUserList = () =>{
        const userListPromise = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                "api-token": 'Thales'
            }
        })
        userListPromise.then(response => {
            const userList = response.data.result;
            this.setState({userList: userList})
        }).catch(error =>{
            alert('Não foi possivel buscar a lista de usuários')
            this.setState({userList: []})
        })
    }


    componentDidMount() {
      this.searchUserList()
    }

    deleteUser = (userId) => {
        const promiseDeleteUser = axios.delete(`${baseUrl}/users/deleteUser?id=${userId}`,{
            headers:{
                'api-token': "Thales",
            }
        })
        promiseDeleteUser.then((response) =>{
            alert("Usuário Apagado com sucesso")
            this.searchUserList();
        }).catch((error)=>{
            alert('Erro ao apagar o usuario')
            console.log(error.response.data.message)
        })
    }

    render() {
        return (
            <MainList>
                {this.state.userList.map(usuario => (
                    <ItemList>{usuario.name}<span onClick={()=> this.deleteUser(usuario.id)}>X</span></ItemList>
                ))}
            </MainList>
        )
    }
}

export default List