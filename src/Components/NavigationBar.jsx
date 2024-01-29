import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export function NavigationBar() {
  return (
    <Navbar expand="lg" className="nav sticky-top">
    <Container>
      <Link to={"/"} className="fs-4 fw-medium navbar-brand">E-commerce</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to={"/"} className=" fw-bold nav-link">Home</Link>
          <Link to={"about"} className=" fw-bold nav-link">About</Link>
          <Link to={"shopping"} className=" fw-bold nav-link">Shopping</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
