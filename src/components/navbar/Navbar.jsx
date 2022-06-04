import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3 fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex" href="/">
            <h3 className="logo-title">NFT project</h3>
          </a>
          <button type="button" className="navbar-toggler">
            {" "}
            ☰{" "}
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar__ul_margin-left">
              <li className="nav-item">
                <a
                  className="nav-link text-dark 
                    navbar__ul_li_a
                    "
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  fragment="about"
                  className="nav-link text-dark 
                    navbar__ul_li_a
                    "
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  fragment="features"
                  className="nav-link text-dark 
                    navbar__ul_li_a
                    "
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  fragment="nfts"
                  className="nav-link text-dark 
                    navbar__ul_li_a
                    "
                  href="/#nfts"
                >
                  Top NFTs
                </a>
              </li>
              <li className="nav-item">
                <a
                  fragment="team"
                  className="nav-link text-dark 
                    navbar__ul_li_a
                    "
                  href="/#team"
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  fragment="contact"
                  href="/#contact"
                  className="nav-link text-dark 
                    navbar__ul_li_a
                    "
                >
                  Contact
                </a>
              </li>
              {/**/}
            </ul>
            <div className="col-sm d-flex align-items-center justify-content-end d-none-nav">
              <button className="navbar__btn"> Connect Wallet </button>
            </div>
          </div>
        </div>
      </nav>
      {/**/}
    </>
  );
};

export default Navbar;
