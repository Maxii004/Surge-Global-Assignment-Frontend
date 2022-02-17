import { Link,NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import React from "react";

const Navbar = () => {

  return (
    <>
      <nav className="navbar">

      <Link to="/"><h2>Surge Global Assignment</h2></Link>         
        
      </nav>
    </>
  );
};

export default Navbar;