import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { baseurl } from "../helper/https";

const Nav = () => {

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
            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo">
                        <a href="index.html">
                            <img src="assets/img/logo/white-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="tpoffcanvas__title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt eaque a cumque, porro maxime
                            autem sed.</p>
                    </div>
                    <div className="tp-main-menu-mobile d-xl-none"></div>
                    <div className="tpoffcanvas__contact-info">
                        <div className="tpoffcanvas__contact-title">
                            <h5>Contact us</h5>
                        </div>
                        <ul>
                            <li>
                                <i className="fa-light fa-location-dot"></i>
                                <a href="https://www.google.com/maps/@23.8223586,90.3661283,15z" target="_blank">Melbone st,
                                    Australia, Ny 12099</a>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <a href="https://template.wphix.com/cdn-cgi/l/email-protection#0f7c60636e7d6a6b686a4f68626e6663216c6062"><span className="__cf_email__" data-cfemail="ea9e828f878f9a9f988faa8d878b8386c4898587">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <i className="fal fa-phone-alt"></i>
                                <a href="tel:+48555223224">+48 555 223 224</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tpoffcanvas__input">
                        <div className="tpoffcanvas__input-title">
                            <h4>Get UPdate</h4>
                        </div>
                        <form action="#">
                            <div className="p-relative">
                                <input type="text" placeholder="Enter mail" />
                                <button>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="tpoffcanvas__social">
                        <div className="social-icon">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <header>

                <div className="tp-header-top__area theme-bg tp-header-top__space">
                    <div className="container container-large">
                        <div className="row align-items-center">

                            <div className="col-xxl-4 col-xl-5 d-none d-xl-block">
                                <div className="tp-header-top__shop-box text-xl-start text-end">
                                    <span>Welcome to AartiMithilakraft</span>
                                    {/* <a href="#">Shop Now</a> */}
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6  col-sm-6 d-none d-sm-block">
                                {/* <div className="tp-header-top__right-box d-flex align-items-center justify-content-end">
                    <span className="mr-10">Extra <i>sale</i> 30% off :</span>
                    <div className="tp-header-top__countdown" data-countdown data-date="Sep 30 2024 20:20:22">
                        <ul>
                            <li><span data-days>0</span></li>
                            <li><span data-hours>0</span></li>
                            <li><span data-minutes>0</span></li>
                            <li><span data-seconds>0</span></li>
                        </ul>
                    </div>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky" className="tp-header__area">
                    <div className="container container-large">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="tp-header__left-box d-flex align-items-center">
                                    <div className="tp-header__bar d-none d-xl-block">
                                        <button className="tp-menu-bar">
                                            <i className="fa-solid fa-bars"></i>
                                        </button>
                                    </div>
                                    <div className="tp-header__logo">
                                      <Link to={'/'}>   
                                            <img src="assets/img/logo1.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 d-none d-xl-block">
                                <div className="tp-header__main-menu">
                                    <nav className="tp-main-menu-content">
                                        <ul>
                                            <li>
                                                <Link to="/" >Home</Link>

                                            </li>

                                            <li><Link to="/shop">Shop</Link></li>
                                            <li>
                                                <a href="#">about</a>
                                            </li>
                                            {/* <li className="has-dropdown">
                                <a href="blog.html">news</a>
                                <ul className="submenu tp-submenu">
                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="blog-details.html">blog details</a></li>
                                </ul>
                            </li> */}
                                            <li>
                                                <a href="#">contact</a>
                                            </li>
                                            <li>
                                                <Link to={'login'}>login</Link>
                                            </li>
                                           
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="tp-header__right-box d-flex align-items-center justify-content-end">
                                    <ul className="d-none d-sm-block">
                                        <li>
                                            <div className="tp-header__icon-box">
                                               
                                                        
                                           
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tp-header__chat-box d-none d-xxl-block">
                                                <a href="contact.html">
                                                    Let,s Talk
                                                    <span>
                                                        {/* <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clippath="url(#clip0_37_410)">
                                                <path
                                                    d="M21.5648 16.6095C23.7874 13.4911 23.4476 9.21882 20.4119 6.43587C19.0249 5.16435 17.2566 4.37279 15.3465 4.15172C15.3346 4.13708 15.3224 4.12257 15.3091 4.10869C13.6474 2.38257 11.26 1.39258 8.75923 1.39258C4.00025 1.39258 0 4.9384 0 9.47852C0 11.0703 0.494455 12.5963 1.43373 13.9141L0.121604 18.0338C0.039127 18.2927 0.120256 18.5757 0.327301 18.7517C0.534705 18.928 0.827281 18.9618 1.06901 18.8389L5.05928 16.8099C5.87875 17.1628 6.74772 17.3943 7.64759 17.4996C9.38346 19.3251 11.7837 20.2598 14.2393 20.2598C15.5158 20.2598 16.7877 19.9996 17.9391 19.5052L21.9296 21.5342C22.0262 21.5834 22.1308 21.6074 22.2348 21.6074C22.6895 21.6074 23.0155 21.1643 22.877 20.7291L21.5648 16.6095ZM5.33124 15.4541C5.14252 15.3644 4.92299 15.3674 4.73679 15.4621L1.89472 16.9072L2.8228 13.9933C2.89036 13.7812 2.84881 13.5494 2.71171 13.374C1.81929 12.2316 1.34757 10.8846 1.34757 9.47852C1.34757 5.76303 4.67241 2.74023 8.75923 2.74023C10.405 2.74023 11.9893 3.23882 13.2745 4.13668C8.94637 4.57188 5.48011 7.95243 5.48011 12.1738C5.48011 13.4868 5.81666 14.7508 6.45119 15.8833C6.06701 15.7689 5.69286 15.6258 5.33124 15.4541ZM18.2618 18.1574C18.0783 18.0641 17.8586 18.0585 17.6673 18.1494C16.6168 18.6484 15.4315 18.9121 14.2393 18.9121C10.1525 18.9121 6.82768 15.8893 6.82768 12.1738C6.82768 8.45834 10.1525 5.43555 14.2393 5.43555C18.3262 5.43555 21.651 8.45834 21.651 12.1738C21.651 13.5799 21.1793 14.9269 20.2868 16.0692C20.1498 16.2446 20.1082 16.4764 20.1757 16.6886L21.1038 19.6025L18.2618 18.1574Z"
                                                    fill="white" />
                                                <path
                                                    d="M11.4993 12.8477C11.8714 12.8477 12.1731 12.546 12.1731 12.1738C12.1731 11.8017 11.8714 11.5 11.4993 11.5C11.1271 11.5 10.8254 11.8017 10.8254 12.1738C10.8254 12.546 11.1271 12.8477 11.4993 12.8477Z"
                                                    fill="white" />
                                                <path
                                                    d="M14.1943 12.8477C14.5665 12.8477 14.8682 12.546 14.8682 12.1738C14.8682 11.8017 14.5665 11.5 14.1943 11.5C13.8222 11.5 13.5205 11.8017 13.5205 12.1738C13.5205 12.546 13.8222 12.8477 14.1943 12.8477Z"
                                                    fill="white" />
                                                <path
                                                    d="M16.8896 12.8477C17.2618 12.8477 17.5635 12.546 17.5635 12.1738C17.5635 11.8017 17.2618 11.5 16.8896 11.5C16.5175 11.5 16.2158 11.8017 16.2158 12.1738C16.2158 12.546 16.5175 12.8477 16.8896 12.8477Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_37_410">
                                                    <rect width="23" height="23" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg> */}
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="tp-header-2__bar d-xl-none">
                                        <button className="tp-menu-bar">
                                            <i className="fa-solid fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )

}

export default Nav