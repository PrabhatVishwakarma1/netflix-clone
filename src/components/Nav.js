import React, { useEffect, useState } from "react";
import NetflixLogo from "../images/Netflix.png";
import "../styles/Nav.css";

const Nav = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NetflixLogo} alt="netflix_logo" />
    </div>
  );
};

export default Nav;
