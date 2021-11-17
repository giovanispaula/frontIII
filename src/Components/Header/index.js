/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = ({nome}) =>{
  return(
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#header">{nome}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#header">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#banner">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </header>

 )
}

export default Header;
