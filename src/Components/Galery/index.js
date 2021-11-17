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
    imagem: 'https://a-static.mlcdn.com.br/618x463/bloco-de-notas-coloridos-pequeno-tb/yellowimport/1199p/7a505e8854855cf60dea29e67bb40afd.jpeg',
    title: 'Notes',
    text: 'Projeto de site para criação de notas pessoais, ao estilo Google Keep',
    src: 'https://github.com/giovanispaula/CheckpointII-FrontII'
  },
  {
    imagem: 'https://img.freepik.com/vetores-gratis/interior-da-galeria_1284-12766.jpg?size=626&ext=jpg',
    title: 'Projeto Fast n Furious',
    text: 'Site para adição de imagens, utilizando CSS, JS e HTML',
    src: 'https://github.com/giovanispaula/Checkpoint'
  }]


const Galeria = ({imagem, title, text, src}) => {
  return (
    <div className="galeria">
    {listaDeProjetos.map((projeto) => 
    <card>
      <div class="card" id="projects">
       <img class="card-img-top" src={projeto.imagem}  alt="Imagem do projeto"/>
        <div class="card-body">
        <h5 class="card-title">{projeto.title}</h5>
        <p class="card-text">{projeto.text}</p>
        <a href={projeto.src} target="_blank" class="btn btn-primary">GitHub</a>
        </div>
      </div>
    </card>
    )
}
  </div>
)
}

export default Galeria;