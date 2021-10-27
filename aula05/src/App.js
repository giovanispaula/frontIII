import './App.css';
import logo from './logo-DH.png'
import background from './background.webp'

function App() {
  const company = "Some Company"


  return (
    <>
      <header>
        <img src={logo} alt="logo of DH" height="150rem"></img>
        <p>Lorem Ipsum</p>
      </header>
      <main>
        <img src={background} alt="background"></img>
        <p>Lorem Ipsum</p>
        <button>this is a button</button>
      </main>

      <footer>
        <p> {company} - All rights reserved - Copyright &copy;</p>
      </footer>
    </>
  );
}

export default App;
