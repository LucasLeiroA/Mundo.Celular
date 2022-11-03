import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="barra">
      <Container className="contenedor">
      
        <Link className="logo" to="/">
          <Navbar.Brand href="#home"> 
            <img src="/logocel2.png" alt="" />
          </Navbar.Brand>
        </Link>
        <Nav className="nav-bar">
          <Link to="/categoria/celular">
            <Nav.Link href="#features">Celulares</Nav.Link>
          </Link>
          <Link to="/categoria/accesorio">
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
          </Link>
          <Link to="/categoria/funda">
            <Nav.Link href="#pricing">Fundas</Nav.Link>
          </Link>
          <Link to="/quinesSomos!"> 
            <Nav.Link className="btn-n1" href="#pricing">
              Quienes Somos!
            </Nav.Link>
          </Link>
          <Link to="/cart">
            <Nav.Link className="carrito" href="#cart">
              <CartWidget />
            </Nav.Link>{" "}  

          </Link>
        </Nav>
      </Container>
    </Navbar>


  );
}

export default NavBar;
