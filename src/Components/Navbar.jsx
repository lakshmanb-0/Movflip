import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ mortv }) {
  const [show, handleShow] = useState(false);
  const [hamburger, handleHamburger] = useState(false);
  const [menuOpen, handlemenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 120 ? handleShow(true) : handleShow(false);
    });
  });

  useEffect(() => {
    let windowWidth = window.innerWidth;
    windowWidth <= 816 && handleHamburger(true);
    window.onresize = function () {
      if (window.innerWidth <= 816) {
        handleHamburger(true);
      } else {
        handleHamburger(false);
      }
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"} `}>
      <div className="navbar_logo">
        <Link to="/">
          <h1>Movflip</h1>
        </Link>
      </div>
      <div className="navbar_menu">
        {hamburger ? (
          <>
            <i
              className="fa-solid fa-bars"
              onClick={() => handlemenuOpen((prev) => !prev)}
            ></i>
            {menuOpen && (
              <div className="hamburgerMenu nav_black">
                <ul className="nav">
                  <Link to="/">
                    <li className={mortv == "/" && "active"}>Home</li>
                  </Link>
                  <Link to="/Movies">
                    <li className={mortv == "movie" && "active"}>Movies</li>
                  </Link>
                  <Link to="/Series">
                    <li className={mortv == "tv" && "active"}>Series</li>
                  </Link>
                  <li>
                    Mylist <i className="fa-solid fa-caret-down"></i>
                  </li>
                </ul>
                <div className="navbar_profile ">
                  <Link to="/search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
                  <i className="fa-solid fa-bell"></i>
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <ul className="nav">
              <Link to="/">
                <li className={mortv == "/" && "active"}>Home</li>
              </Link>
              <Link to="/Movies">
                <li className={mortv == "movie" && "active"}>Movies</li>
              </Link>
              <Link to="/Series">
                <li className={mortv == "tv" && "active"}>Series</li>
              </Link>
              <li>
                Mylist <i className="fa-solid fa-caret-down"></i>
              </li>
            </ul>
            <div className="navbar_profile ">
              <Link to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <i className="fa-solid fa-bell"></i>
              <i className="fa-solid fa-user"></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
