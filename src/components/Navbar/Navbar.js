import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isUser,setIsUser]=useState(null)
    useEffect(()=>{
        const currentUser = JSON.parse(localStorage.getItem('eklavyaStudent'))
      //  console.log(currentUser)
     setIsUser(currentUser)
      },[0])
    const openHamburger=()=>{
        console.log('clicked hamburger')
      setIsMenuOpen(!isMenuOpen)
    }
 const [isMenuOpen,setIsMenuOpen]=useState(false)
const logoutHandler=()=>{
    localStorage.removeItem('eklavyaStudent');
    window.location.reload()
}
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
                             
                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2" 
                                    onClick={()=>openHamburger()}>
                                        <button className="toggle" >
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

{/* Mobile navBar */}
{isMenuOpen &&
   <div id="site-main-mobile-menu" 
   onClick={()=>openHamburger()} 
   className={`mobile-menu-open ${isMenuOpen?'':'custom'}`}

>
<div className="site-main-mobile-menu-inner ">
   <div className="mobile-menu-header">
       <div className="mobile-menu-logo">
           <a href="/"><img src="http://ekluvya.guru/assets/images/logo/1ekt-logo.png" alt="" /></a>
       </div>
       <div className="mobile-menu-close" >
           <button className="toggle"  onClick={()=>openHamburger()}>
               <i className="icon-top"></i>
               <i className="icon-bottom"></i>
           </button>
       </div>
   </div>
   <div className="mobile-menu-content">
       <nav className="site-mobile-menu">
           <ul>
               <li className="position-static">
                   <a href="https://ekluvya.guru"><span className="menu-text">Home</span></a>
               </li>
               <li>
                   <a href="/courselist"><span className="menu-text">Classes</span></a>
               </li>
               <li>
                   <a href="/subscribe/5fcb8020d145740024b96ead/6"><span className="menu-text">Pricing</span></a>
               </li>
               <li>
                   <a href="https://ekluvya.guru/contact-us.html"><span className="menu-text">Contact</span></a>
               </li>
{!isUser?<>
               <li>
                   <a href="/login"><span className="menu-text">Login</span></a>
               </li>
               <li>
                   <a href="/register"><span className="menu-text">Register</span></a>
               </li>
        </>:    <li>
                   <a onClick={logoutHandler}><span className="menu-text">Logout</span></a>
               </li>  }
           </ul>
       </nav>
   </div>
</div>
</div>


}
     
        
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
                                    {!isUser?<>
               
                   <a href="/login"><span className="menu-text">Login</span></a>
               
               
                   <a href="/register"><span className="menu-text">Register</span></a>
               
        </>:    
                   <a onClick={logoutHandler}><span className="menu-text">Logout</span></a>
                 }
                                    </div>
                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button className="toggle" onClick={()=>console.log('clecked')}>
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
