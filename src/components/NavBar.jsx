import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logoVMA.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='container'>
      <Navbar.Brand  className="logo-container" style={{ margin: '0 50px', padding: '0 0' }}>
        <img
          src={logo}
          height="100"
          alt="Logo VMA"
        />
      </Navbar.Brand>
      <Navbar expand="lg" variant="danger" className="text-light rounded barra" style={{ width: '100%', margin: '0 0px' }}>
        <Navbar.Toggle aria-controls="navbar-nav" className='toggle'></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" style={{ padding: '0 50px' }}>
          <Nav className="ml-auto nav-link" style={{ padding: '0 0px' }}>
            <Nav.Link className='cool-link' href="#inicio">Inicio</Nav.Link>
            <Nav.Link className='cool-link' href="#acerca-de">Nosotros</Nav.Link>
            <Nav.Link className='cool-link' href="#servicios">Servicios</Nav.Link>
            <Nav.Link className='cool-link' href="#registrate">Registrate</Nav.Link>
            <Nav.Link className='cool-link' href="#Consejos">Consejos</Nav.Link>
            <Nav.Link className='cool-link' href="#Contacto">
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
