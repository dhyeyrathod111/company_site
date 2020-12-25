import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHomePage = props => {
    return (
        <header className="header-one">
            <div className="topbar-area fix hidden-xs">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-9 col-sm-9">
                            <div className="topbar-left">
                                <ul>
                                    <li><a><i className="fa fa-envelope" /> info@randerc3.com</a></li>
                                    <li><a><i className="fa fa-phone-square" /> +3234-7665545</a></li>
                                    <li><a><i className="fa fa-clock-o" /> Mon - Fri: 10:00 - 18:00</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="top-social">
                                <ul>
                                    <li><a><i className="fa fa-skype" /></a></li>
                                    <li><a><i className="fa fa-twitter" /></a></li>
                                    <li><a><i className="fa fa-facebook" /></a></li>
                                    <li><a><i className="fa fa-google" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticker" className="header-area header-area-3 hidden-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className="logo">
                                <Link className="navbar-brand page-scroll white-logo" to={'/'}>
                                    <img src="assets/img/logo/logo2.png" alt="" />
                                </Link>
                                <Link className="navbar-brand page-scroll black-logo" to={'/'}>
                                    <img src="assets/img/logo/logo.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-9">
                            <div className="header-right-link">
                                <div className="search-inner">
                                    <form action="#">
                                        <div className="search-option">
                                            <input type="text" placeholder="Search..." />
                                            <button className="button" type="submit"><i className="fa fa-search" /></button>
                                        </div>
                                        <a className="main-search"><i className="fa fa-search" /></a>
                                    </form>
                                </div>
                                <a className="s-menu" href="login.html">It Consultant</a>
                            </div>
                            <nav className="navbar navbar-default">
                                <div className="collapse navbar-collapse" id="navbar-example">
                                    <div className="main-menu">
                                        <ul className="nav navbar-nav navbar-right">

                                            <li><Link to={'/'}>Home</Link></li>
                                            <li><Link to={'/about'}>About</Link></li>

                                            {/* <li><a className="pages" href="index.html">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="index-2.html">Home 02</a></li>
                                                    <li><a href="index-3.html">Home 03</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a className="pages">Services</a>
                                                <ul className="sub-menu">
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="services-2.html">Services 2</a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="pages">Project</a>
                                                <ul className="sub-menu">
                                                    <li><a href="project.html">Portfolio</a></li>
                                                    <li><a href="project-details.html">Project details</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="pages">Blog</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">Blog grid</a></li>
                                                    <li><a href="blog-sidebar.html">Blog List</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contacts</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-area hidden-lg hidden-md hidden-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mobile-menu">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                                <nav id="dropdown">
                                    <ul>
                                        <li><Link to={'/'}>Home</Link></li>
                                        <li><Link to={'/about'}>About</Link></li>

                                        {/* <li><a className="pages" href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home 01</a></li>
                                                <li><a href="index-2.html">Home 02</a></li>
                                                <li><a href="index-3.html">Home 03</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="pages">Page</a>
                                            <ul className="sub-menu">
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="review.html">Reviews</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="pages">Services</a>
                                            <ul className="sub-menu">
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="services-2.html">Services 2</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="pages">Project</a>
                                            <ul className="sub-menu">
                                                <li><a href="project.html">Portfolio</a></li>
                                                <li><a href="project-details.html">Project details</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="pages">Blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Blog grid</a></li>
                                                <li><a href="blog-sidebar.html">Blog List</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contacts</a></li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderHomePage;
