import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar color="primary" expand="lg">
      <Container fluid>
        <NavbarBrand href="/">Solar Flare Detector</NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <a
                href="https://drive.google.com/drive/folders/1bUPItKyx3k8lPJtmMMnQ-ltfkJmBfcoy?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="nav-link btn-magnify"
              >
                <p>
                  <span className="d-lg-block d-md-block">Documentation</span>
                </p>
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://drive.google.com/drive/folders/1hZqiQtUUN80Frkhp-cBfjUOixNiKppi1?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="nav-link btn-magnify"
              >
                <p>
                  <span className="d-lg-block d-md-block">Manual</span>
                </p>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
