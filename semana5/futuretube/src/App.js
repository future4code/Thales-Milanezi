import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <header>
        FutureTube
        <span>
            <form>
                <input type="search" placeholder="BUSCAR"></input>
            </form>
        </span>
    </header>
    <div >
        <ul>
            <li>
                <a href="futuretub.html">
                    HOME
                </a>
            </li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Histórico</li>
            <li>Biblioteca</li>
        </ul>
    </div>
        <main>
            <section>
                <div a class="bloco">
                 <a href="video.html">
                 <img src={require("../src/imagens/video1.jpg")}></img>
                     <div>video 1</div>
                </a> 
                </div>
                
                <div class="bloco">
                    <a href="video2.html">
                    <img src={require("../src/imagens/video2.jpg")}></img>
                        vídeo 2
                    </a> 
                </div>
               
                <div class="bloco">
                <img src={require("../src/imagens/video3.jpg")}></img>
                    vídeo 3
                </div>
                
                <div class="bloco">
                <img src={require("../src/imagens/video4.jpg")}></img>
                    vídeo 4
                </div>
                
                <div class="bloco">
                <img src={require("../src/imagens/video5.jpg")}></img>
                    vídeo 5
                </div>
                
                <div class="bloco">
                <img src={require("../src/imagens/video6.jpg")}></img>
                    vídeo 6
                </div>
                
                <div class="bloco">
                <img src={require("../src/imagens/video7.jpg")}></img>
                    vídeo 7
                </div>
                
                <div class="bloco">
                <img src={require("../src/imagens/video8.jpg")}></img>
                    vídeo 8
                </div>
                
            </section>
        </main>
    <footer>Site feito por Thales Fernando Milanezi - Todos os direito Reservados</footer> 
    </div>
  );
}

export default App;
