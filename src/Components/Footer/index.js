import './style.scss';

const Footer = ({nome}) => {
  const generateDateString = () => {
    const creationYear = '2021';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
  }

  return (
    <footer id="footer" className={`d-flex flex-wrap justify-content-center align-items-center py-3 border-top}`}>
      <h3>{nome} - Todos os direitos reservados. &copy;Copyright {generateDateString()}</h3>
    </footer>
  )
}

export default Footer;