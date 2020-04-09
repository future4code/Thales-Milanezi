import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

export const GlobalStyle = createGlobalStyle`
body{
  margin:0;
}
`
export const MainCard = styled(Paper)`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 10% 10% 70% 5%;
width: 90vw;
height: 95vh;
margin-left: 5vw;
padding:30px;
`
export const AllTexts = styled(Typography)`
margin: o auto;
`

export const InputTask = styled(TextField)`
width:30vw;
margin: 20px;
`
export const ButtonTask = styled(Button)`

`
export const HeaderCard = styled(Paper)`
width: 50vw;
height: 10vh;
`
export const HandleAllCard = styled(Paper)`
display: flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
height: 100%;
gap: 10px;
`

export const TaskCard = styled(Paper)`
width: 85vw;
gap: 10px;
`
export const Footer = styled.div`
`
export const Tasks = styled.div`
`

