import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import CreatePlaylist from './Component/CreatePlaylist'
import ViewPlaylist from './Component/ViewPlaylist'
import DeletePlaylist from './Component/DeletePlaylist'

const MainDiv = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr;

`
const MainHeader = styled.header`
background-color: #379392;
font-size: 30px;
color: #744FC6;
text-shadow: 2px 2px 4px  #4FB0C6;
display: flex;
justify-content: center;
`

const ContentPlaylist = styled.div` 
`


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <MainDiv>
        <MainHeader>FUTURE4-SPOTIFY</MainHeader>
        <CreatePlaylist />
        <ViewPlaylist />
        <DeletePlaylist />
      </MainDiv>
    )
  }
}

export default App;
