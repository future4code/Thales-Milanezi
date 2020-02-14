import React from 'react';
import './App.css';
import Post from './Post/Post';
import ImagemPost from './Post/ImagemPost/ImagemPost';
import LikeAndComent from './Post/LikeAndComent/LikeAndComent';
import Titulo from './Post/Titulo/Titulo';

function App() {
  return (
    <div className="App">

     <Post>
      <Titulo titulo='Thales Fernando Milanezi' myface={require('../src/Post/icones/imagemAutor.jpg')}/>
      <ImagemPost imagem={require('../src/Post/icones/maldivas.jpg')}/>
      <LikeAndComent/>
     </Post>

     <Post>
      <Titulo titulo='Thales Fernando Milanezi' myface={require('../src/Post/icones/imagemAutor.jpg')}/>
      <ImagemPost imagem={require('../src/Post/icones/fall.jpg')}/>
      <LikeAndComent/>
     </Post>

     <Post>
      <Titulo titulo='Thales Fernando Milanezi' myface={require('../src/Post/icones/imagemAutor.jpg')}/>
      <ImagemPost imagem={require('../src/Post/icones/japan.jpg')}/>
      
      <LikeAndComent/>
     </Post>

    </div>
  );
}

export default App;
