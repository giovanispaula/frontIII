/* eslint-disable react/jsx-no-target-blank */
import './style.scss';

const listaDeProjetos = [
  {
    imagem: 'https://github.com/giovanispaula/PodCastream/blob/main/img/header-parallax.jpg?raw=true',
    title: 'PodCastream',
    text: 'Compilador de podcasts elaborado para Checkpoint de FrontEnd I',
    src: 'https://github.com/giovanispaula/PodCastream'
  },
  {
    imagem: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Criar-um-Site.png',
    title: '2 projeto',
    text: 'projeto de nro 2',
    src: 'https://github.com/giovanispaula/PodCastream'
  },
  {
    imagem: 'https://github.com/giovanispaula/PodCastream/blob/main/img/header-parallax.jpg?raw=true',
    title: '3 projeto',
    text: 'projeto de nro 3',
    src: 'https://github.com/giovanispaula/PodCastream'
  }]


const Galeria = ({imagem, title, text, src}) => {
  return (
    <>
    {listaDeProjetos.map((projeto) => 
    <card>
      {/* <div class="card"> */}
       <img class="card-img-top" src={projeto.imagem}  alt="Imagem do projeto"/>
        <div class="card-body">
        <h5 class="card-title">{projeto.title}</h5>
        <p class="card-text">{projeto.text}</p>
        <a href={projeto.src} target="_blank" class="btn btn-primary">GitHub</a>
        </div>
      {/* </div> */}
    </card>
    )
}
  </>
)
}

export default Galeria;