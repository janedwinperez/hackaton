
import { Link } from 'react-router-dom';
import '../css/Menu.css'
import logo from '..//assets/logo.png'
import { useState } from 'react'


function Menu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="menu">
      <img src={logo} alt="Logo de la aplicación" className="menu-logo" />
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Inicio</Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-link">Acerca de</Link>
        </li>
        <li
          className={`menu-item has-submenu ${isServicesOpen ? 'open' : ''}`}
          onClick={handleServicesClick}
        >
          <span className="menu-link">Servicios</span>
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/services/registro1" className="submenu-link">Registro 1</Link>
            </li>
            <li className="submenu-item">
              <Link to="/services/registro2" className="submenu-link">Registro 2</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;