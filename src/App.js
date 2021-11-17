/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Galeria from './Components/Galery';
import Footer from './Components/Footer';

import './App.scss';

export default class App extends Component {
  constructor(){
  super();
  }
  
  nome = 'Giovani Silva';
    
  render() {
  return (
   <>
   <Header nome={this.nome}/>
   <Banner>
   <h2>Quem é Giovani Silva?</h2>
    <p>
    Engenheiro civil que, durante a pandemia ficou desempregado e viu a oportunidade que lhe faltava para fazer sua transição de carreira para a área de tecnologia!
    Sempre foi apaixonado por desenvolvimento, porém nunca teve coragem de seguir seu sonho, mas agora vai! rs
    Ama assistir séries e filmes, mas também não recusa um barzinho e uma cerva gelada!
    </p>
   </Banner>

   <Galeria/>
   <Footer nome={this.nome} />
   </>
  );
}
}