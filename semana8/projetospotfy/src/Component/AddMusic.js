import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainAdd = styled.div`
background-color: #4FB0C6;
display:grid;
grid-template-columns: 1fr;
`
const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

class AddMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlistId: "",
            music: ''
        }
    }

    requestMusic = () => {
        const addMusicPromise = axios.put(`${baseUrl}/playlists/addMusicToPlaylist`, data, {
            headers: {
                "auth": "Thales"
            }
        })
        addMusicPromise.then((response)=>{
            alert("Musica adicionada com Sucesso ")
        }).catch((error)=>{
            alert("Sorry, a musica não foi Adicionada com sucesso ")
        })
    }

    render() {
        return (
            <MainAdd>
                Olá eu adiciono musicas
            </MainAdd>
        )
    }
}

export default AddMusic