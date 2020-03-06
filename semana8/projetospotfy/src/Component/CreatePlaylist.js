import React, { Component } from "react"
import axios from "axios"
import styled from 'styled-components'


const MainCreatePlaylist = styled.div`
background-color: #4FB0C6;
display:grid;
grid-template-columns: 1fr;

`



const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'



class CreatePlaylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            namePlaylist: '',
            currentPlaylist: undefined
        }
    }

    handleChangeName = (event) => {
        const newPlaylist = event.target.value;
        this.setState({ namePlaylist: newPlaylist })
    }

    handleSaveNewPlaylist = () =>{
        const newNamePlaylist = {
            name:this.state.namePlaylist
        }

        const promiseNewPlaylist = axios.post(`${baseUrl}/playlists/createPlaylist`, newNamePlaylist,{
            headers: {
                "auth" : 'Thales'
            }
        })

        promiseNewPlaylist.then((response)=>{
            alert('Playlist Criada com Sucesso')
        }).catch((error)=>{
            alert('Desculpe, Algo deu errado, tente novamente !')
            console.log(error.data)
        })

    }


    render() {

        return (
            <MainCreatePlaylist>
                <input
                    type='text'
                    placeholder='Digite o nome da Sua Nova Playlist'
                    onChange={this.handleChangeName}
                    value={this.state.namePlaylist}
                />
                <button onClick={this.handleSaveNewPlaylist}>Criar nova Playlist</button>
                {this.state.currentPlaylist && (
                    <div>
                        <ul>
                        </ul>
                    </div>
                )}
            </MainCreatePlaylist>
        )
    }
}

export default CreatePlaylist