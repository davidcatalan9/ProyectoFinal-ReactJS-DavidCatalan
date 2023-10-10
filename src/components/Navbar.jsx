import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
const cartCount = 0;


function Navbar() {
  return (
    <div>
      <BootstrapNavbar bg="success" expand="lg" className='p-2 m-3' >
        <Link className="navbar-brand" to="/">Inicio</Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/sucursal">Sucursal</Link>
            <Link className="nav-link" to="/nosotros">Nosotros</Link>
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </Nav>
          <Nav>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/Casio">
                Casio
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Festina">
                Festina
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Rolex">
                Rolex
              </NavDropdown.Item>
            </NavDropdown>
            
            <Link className="nav-link ml-auto" to="/cart">
              <FaShoppingCart style={{ fontSize: '24px' }} /> 
              <span className="badge badge-danger" style={{ fontSize: '16px' }}>{cartCount}</span> 
            </Link>

          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>

  );
}

export default Navbar;
