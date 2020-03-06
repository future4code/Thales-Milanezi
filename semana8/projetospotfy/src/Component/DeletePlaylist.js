import React, { Component } from "react"
import axios from 'axios'
import styled from 'styled-components'

const MainDelete = styled.div`
background-color: #4FB0C6;
display:grid;
grid-template-columns: 1fr;
`
const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

class DeletePlaylist extends Component{
    constructor(props){
        super(props)
        this.state={
            listOfPlaylist: []
        }
    }

    DeleteCreatedPlaylist = (playlistId) => {
        const DeletePlaylistPromise = axios.delete(`${baseUrl}/playlists/deletePlaylist?playlistId=${playlistId}`,{
            headers: {
                'auth': 'Thales',
            }
        })
        DeletePlaylistPromise.then((response) => {
            alert('Playlist Foi deletada com sucesso !')
            this.listOfPlaylist();
        }).catch((error) => {
            alert('Ops, Aconteceu algo que nçao foi possivel deletar a playlist, tente noamnte mais tarde')
            console.log(error)
        })
    }

    render(){
        return(
            <MainDelete>
                {this.state.listOfPlaylist.map(playlist =>(
                    <button onClick={()=> this.DeleteCreatedPlaylist(playlist.id)}></button>
                ))}
            </MainDelete>
        )
    }
}
export default DeletePlaylist