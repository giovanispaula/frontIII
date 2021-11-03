import '../Styles/App.css';
import ClassComponent from '../Componentes/ClassComponent.jsx';
import FunctionComponent from '../Componentes/FunctionComponent.jsx';

function App() {
  return (
    <div className="App">
      <h3>Convidados:</h3>
    
    <ClassComponent nome="Nicolas" estaNaLista={true} />


      <h3>Tarefa: </h3>
    <FunctionComponent />
  </div>
  );
}

export default App;