import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      
      
        <div className="header-section header-fluid sticky-header section main-nav">
            <div className="header-inner">
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-1 col-auto logo-top">
                            <div className="header-logo">
                                <a href="http://ekluvya.guru">
                                    <img className="dark-logo" src="assets/images/logo/ekt-logo.png" alt="Ekluvya" />
                                    <img className="light-logo" src="assets/images/logo/ekt-logo.png" alt="Ekluvya" />
                                </a>
                            </div>
                        </div>
                        <div className="col d-none d-xl-block position-static">
                            <nav className="site-main-menu">
                                 <ul>
                                    <li className="position-static">
                                        <a href="http://ekluvya.guru/"><span className="menu-text">Home</span></a>
                                    </li>
                                    <li className="position-static">
                                        <a href="http://ekluvya.guru/about.html"><span className="menu-text">About</span></a>
                                    </li>
                                    <li className="has-children">
                                        <a href="javscript:void(0)"><span className="menu-text">Products</span></a>
                                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                        <ul className="sub-menu">
                                            <li><a href="http://ekluvya.guru/learncoding.html" target="_blank"><span className="menu-text">Coding</span></a></li>
                                            <li><a href="https://classes.ekluvya.guru/" target="_blank">
                                                <span className="menu-text">Tuitions</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="position-static">
                                        <a href="/"><span className="menu-text">Blogs</span></a>
                                    </li>
                                    {/* <li className="position-static">
                                        <a href="http://ekluvya.guru/contact-us.html"><span className="menu-text">Contact</span></a>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-auto">
                            <div className="header-right">
                                <div className="inner">
                                    <div className="header-social d-none d-sm-flex">
                                        <a href="https://twitter.com/EkluvyaTweets" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/Ekluvya.Guru" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/ekluvya.guru/" target="_blank"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com/company/ekluvya-guru/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                  
                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button className="toggle">
                                            <i className="icon-top"></i>
                                            <i className="icon-middle"></i>
                                            <i className="icon-bottom"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 




        
        <div className="header-section header-fluid sticky-header section">
            <div className="header-inner">
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-auto">
                            <div className="header-logo">
                                <a href="/">
                                    <img className="dark-logo" src="http://ekluvya.guru/assets/images/logo/1ekt-logo.png" alt="Ekluvya" />
                                    <img className="light-logo" src="http://ekluvya.guru/assets/images/logo/1ekt-logo.png" alt="Ekluvya" />
                                </a>
                            </div>
                        </div>
                        <div className="col d-none d-xl-block position-static">
                            <nav className="site-main-menu">
                                 <ul>
                                    <li className="position-static">
                                        <a href="/"><span className="menu-text">Home</span></a>
                                    </li>
                                   
                                   
                                    <li className="position-static">
                                        <a href="http://ekluvya.guru/contact-us.html"><span className="menu-text">Contact</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-auto">
                            <div className="header-right">
                                <div className="inner">
                                    <div className="header-social d-none d-sm-flex">
                                        <a href="/login">Login</a>
                                        <a href="/register">Register</a>
                                    </div>
                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button className="toggle">
                                            <i className="icon-top"></i>
                                            <i className="icon-middle"></i>
                                            <i className="icon-bottom"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
