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

        {/* Top Header */}
        <div className="tp-header-top__area theme-bg tp-header-top__space">
          <Container>
            <div className="row align-items-center">
              <div className="col-xl-12 d-none d-xl-block">
                <div className="tp-header-top__shop-box d-flex justify-content-between">
                  <span>Authentic | Hand-Painted | Traditional Art | Protecting Culture | Empowering Women</span>
                  <span>Originals From Mithila, Bihar</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Logo + Icons Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">

          <div className="container d-flex align-items-center justify-content-between">

            {/* Left: Logo - collapses in mobile */}
            <div className="d-flex align-items-center gap-3">
              <img
                src="/assets/img/logo2.png"
                alt="Home"
                title="Home"
                width="80"
                height="65"
              />
              <h1 className="text-logo-2 mt-2 mb-0  d-none">
                <b className="text-logo-1">Ⓐ</b>ⓐⓡⓣⓘ
                <b className="text-logo-1">Ⓜ</b>ⓘⓣⓗⓘⓛⓐ
                <b className="text-logo-1">Ⓚ</b>ⓡⓐⓕⓣ
              </h1>
            </div>

            {/* Right Side Icons */}
            <div className="justify-content-end" id="headerIcons">
              <ul className="navbar-nav flex-row gap-3 mt-3 mt-lg-0">

                <li className="nav-item">
                  <a href="#">
                    <img src="/assets/img/icon/icon-user.png" alt="Login" width="35" height="35" />
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#">
                    <img src="/assets/img/icon/icon-cart.png" alt="Cart" width="35" height="35" />
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#">
                    <img src="/assets/img/icon/icon-facebook.png" alt="Facebook" width="35" height="35" />
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#">
                    <img src="/assets/img/icon/icon-instagram.png" alt="Instagram" width="35" height="35" />
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </nav>

        {/* Main Navigation */}
        <div className="container">
          <Navbar bg="light" expand="lg" sticky="top">
            <Container>

              {/* Toggle for main nav */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto navBar">

                  <Nav.Link as={Link} to="/" className="navText">Home</Nav.Link>

                  <NavDropdown
                    title={<>Products <span className="customArrow">▼</span></>}
                    id="basic-nav-dropdown"
                    className="navText navDropdownCustom"
                  >
                    <NavDropdown.Item as={Link} to="/shop?type=Sarees">Sarees</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/shop?type=Kurtis">Kurtis</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/shop?type=Home Decoration">Home Decoration</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/shop?type=Bedsheets">Bedsheets</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={Link} to="/about-us" className="navText">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/contact-us" className="navText">Contact Us</Nav.Link>
                  <Nav.Link as={Link} to="/highlights" className="navText">Highlights</Nav.Link>
                  <Nav.Link as={Link} to="/reviews" className="navText">Reviews</Nav.Link>

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
