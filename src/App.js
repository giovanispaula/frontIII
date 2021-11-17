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
   <img src="https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/81424747_10212413702057595_284078749094248448_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeElnUnBEscsHWobyQFjDUPW6pjOIUZzAWvqmM4hRnMBaz5jhJUk_5niKwwvqSyRJh8&_nc_ohc=Q07e1zU9-bkAX_F5br0&_nc_ht=scontent.fgru5-1.fna&oh=be49b58548d932cc630b7ff46eec4d25&oe=61BA2228" class="img-thumbnail" alt="..."/>
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