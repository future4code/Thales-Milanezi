import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const MainViewList = styled.div`
background-color: #4FB0C6;
display:grid;
grid-template-columns: 1fr;
`
const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

class ViewPlaylist extends Component {
    constructor(props){
        super(props)
        this.state={
            listOfPlaylist: []
        }
    }

    searchPlaylist = () => {
        const searchPlaylistPromise = axios.get(`${baseUrl}/playlists/getAllPlaylists`, {
            headers:{
                'auth': 'Thales'
            }
        })
        searchPlaylistPromise.then((response)=>{
            const listOfPlaylist = response.data;
            this.setState({listOfPlaylist: listOfPlaylist})
        }).catch((error)=>{
            alert('Ops, não consegui buscar a lista de playlist, tente novamente!')
            console.log(error)
        })
    }

    

    render(){
        return(
            <MainViewList>
                {this.state.listOfPlaylist.map(playlist => <li>{playlist.name}</li>)}
            </MainViewList>
        )
    }
}

export default ViewPlaylist