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
              <div className="col-xxl-4 col-xl-5 d-none d-xl-block w-100">
                <div className="tp-header-top__shop-box text-xl-start">
                  <span>Authentic | Hand-Painted | Traditional Art | Protecting Culture | Empowering Women</span>
                  <span className="float-end">Originals From Mithila, Bihar</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse" id="">
            <img src="/assets/img/logo2.png" alt="Home" title="Home" width="100" height="75" />
            <h1 className="text-logo-2 mt-3"><b className="text-logo-1">Ⓐ</b>ⓐⓡⓣⓘ<b className="text-logo-1">Ⓜ</b>ⓘⓣⓗⓘⓛⓐ<b className="text-logo-1">Ⓚ</b>ⓡⓐⓕⓣ</h1>
          </div>
          <div class="">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 flex-row">
              <li class="nav-item">
                <a href="#"><img src="/assets/img/icon/icon-user.png" alt="Login" title="Login" width="40" height="40" /></a>
              </li>
              <li class="nav-item">
                <a href="#"><img src="/assets/img/icon/icon-cart.png" alt="Cart" title="Shop Now" width="40" height="40" /></a>
              </li>
              <li class="nav-item">
                <a href="#"><img src="/assets/img/icon/icon-facebook.png" alt="Facebbok" title="Facebook Page" width="40" height="40" /></a>
              </li>
              <li class="nav-item">
                <a href="#"><img src="/assets/img/icon/icon-instagram.png" alt="Instagram" title="Instagram Story" width="40" height="40" /></a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="container">
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto navBar" >
                <Nav.Link as={Link} to="/" className="navText" >Home</Nav.Link>
                <NavDropdown title={<>Products <span className="customArrow">▼</span></>} id="basic-nav-dropdown" className="navText navDropdownCustom" >
                  <NavDropdown.Item as={Link} to="/shop?type=Sarees" className="navText" >Sarees</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop?type=Kurtis" className="navText" >Kurtis</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop?type=Home Decoration" className="navText" >Home Decoration</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop?type=Bedsheets" className="navText" >Bedsheets</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/about-us" className="navText" >About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact-us" className="navText" >Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/highlights" className="navText" >Highlights</Nav.Link>
                <Nav.Link as={Link} to="/reviews" className="navText" >Reviews</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      </header>
    </>
  );
};

export default BootstrapNav;
