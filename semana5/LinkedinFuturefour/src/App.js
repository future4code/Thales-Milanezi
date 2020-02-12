import React from 'react';

import './App.css';
import LinkedinFutureFour from './LinkedinFutureFour/LinkedinFutureFour'
import ImageButton from './ImageButton/ImageButton';
import SmallCard from './SmallCard/SmallCard';
import PageSection from './PageSection/PageSection';

function App() {
  return (
    <div className="App">
    <PageSection titulo='Dados Pessoais'/>
    <LinkedinFutureFour imag="https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945_1280.jpg" nome='Thales Fernando Milanezi' descricao='Oi meu nome é Thales, sou um futuro desenvolvedor Fullstack. Gosto de esportes, Games, Cozinhar, Viajar, etc. 
    Estou estudando muito para me tornar desenvolvedor mas esta muito HARD e espero melhorar com o tempo.'/>
    <SmallCard text={"Email : milanezitf@gmail.com"} imagem='https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687_960_720.png'/>
    <SmallCard text={"Endereço : Avenida do Café, numero 54"} imagem ='https://cdn.pixabay.com/photo/2013/07/12/14/14/house-148033_1280.png'/>
    <ImageButton text={"Ver Mais"} />
    <PageSection titulo='Dados Profissionais'/>
    <LinkedinFutureFour imag='https://cdn.pixabay.com/photo/2013/02/05/19/16/swimming-78112_1280.jpg' nome='Professor de Musculação' descricao='prescrição de treinamento de musculação para iniciantes intermediarios e bodybuilders'/>
    <LinkedinFutureFour imag='https://image.shutterstock.com/image-photo/modern-light-gym-sports-equipment-600w-721723381.jpg' nome='Professor de Natação' descricao='Aulas de natação personalizada com no maximo 5 alunos por turma'/>
    <PageSection titulo='Redes Sociais'/>
    <ImageButton text={"Facebook"} />
    </div>
  );
}

export default App;
