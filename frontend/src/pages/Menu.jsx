
import { Link } from 'react-router-dom';
import '../css/Menu.css'
import logo from '..//assets/logo.png'



function Menu() {
  return (
    <nav className="menu">
      <img src={logo} alt="Logo de la aplicación" className="menu-logo" />
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Inicio</Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-link">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/services" className="menu-link">Services</Link>
          <ul>
            <li>Registro Agricultores</li>
            <li>Registro Clientes</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;