import React from "react"
import axios from 'axios'
import styled from 'styled-components'

const PrincipalWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-content: center;
background-color: #6D3FB2;

`
const Inputs = styled.form`
padding:15px;
border: 2px solid black;
display: grid;
grid-template-columns: 1fr;
margin: 1px;

`
const baseUrl = "https://www.metaweather.com/api/"

class Wheater extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            localizacao: '',
            allCountrysCode: [{
                name: "Sao Paulo",
                id: 455827
            },
                {
                name: "Rio de Janeiro",
                id: 455825
            },
                {
                    name: "Brasilia",
                    id: 455819
            },
                {
                    name: "Salvador",
                    id: 455826
            }
            ],
            handlePag: 'showUp',
            currentLocation: undefined,
            data: ''
        }
    }
    
    searchLocationDetails = async (event) => {
        const cityLocationId = event.target.value;
        const response = await axios.get(`${baseUrl}location/${cityLocationId}`)
        const AllWheater = response.data;
        this.setState({ currentLocation: AllWheater })
    }
   
    render() {
        console.log(this.state.currentLocation)
        return (
            <PrincipalWrapper>

                <select onChange={this.searchLocationDetails}>
                    <option>Escolha uma Localização</option>
                    {this.state.allCountrysCode.map((local) => (<option value={local.id}>{local.name}</option>))}
                </select>
                {this.state.currentLocation && (
                    <div>
                        <p> Temperatura Atual:       
                        {this.state.currentLocation.consolidated_weather[0].the_temp}
                        ºC
                        </p>
                        <p> Temperatura MAX:       
                        {this.state.currentLocation.consolidated_weather[0].max_temp}
                        ºC
                        </p>
                        <p> Temperatura MIN:       
                        {this.state.currentLocation.consolidated_weather[0].min_temp}
                        ºC
                        </p>
                        <p> Humidade relativa do Ar:     
                        {this.state.currentLocation.consolidated_weather[0].humidity}
                        %
                        </p>
                        <p> Data de Hoje:
                        {this.state.currentLocation.consolidated_weather[0].applicable_date}
                        </p>
                        <p> Velocidade do vento:        
                        {this.state.currentLocation.consolidated_weather[0].wind_speed}
                        km/h
                        </p>
                    </div>
                )}
            </PrincipalWrapper>
        )
    }
}

export default Wheater