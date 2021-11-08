import ClasseComponent from './components/ClasseComponent';
import FunctionComponent from './components/FunctionComponent';
import './App.css';

function App() {
  const listaFesta = [
    {nome: 'Nicolas', estaNaLista: true, tarefa: 'batata-frita'},
    {nome: 'Pedro', estaNaLista: false, tarefa: 'pizza'},
    {nome: 'Carolina', estaNaLista: true, tarefa: 'bebidas'}
  ]
  
  return (
    <div className="container">
      <div className="container-lista">
        <h3>Convidado:</h3>
        {
          listaFesta.map(({nome, estaNaLista}) => {
            return (
              <ClasseComponent key={nome} nome={nome} estaNaLista={estaNaLista} />
            )
          })
        }
        <h3>Tarefas: </h3>
        {
          listaFesta.map(({nome, tarefa}) => {
            return (
              <FunctionComponent key={nome} nome={nome} tarefa={tarefa} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
