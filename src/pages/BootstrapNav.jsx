import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BootstrapNav.css'

const BootstrapNav = () => {
  return (
    <>
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="far fa-angle-double-up"></i>
      </button>
      <header>
        <div className="tp-header-top__area theme-bg tp-header-top__space">
          <Container>
            <div className="row align-items-center">
              <div className="col-xxl-4 col-xl-5 d-none d-xl-block">
                <div className="tp-header-top__shop-box text-xl-start text-end">
                  <span>Welcome to AartiMithilakraft</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="logo">
              <img src="/assets/img/logo2.png" alt="Logo" />
            </Navbar.Brand>
            <div><h4>AartiMithilaKraft</h4></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default BootstrapNav;
