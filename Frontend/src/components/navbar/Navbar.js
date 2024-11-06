import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className="list-link">
        <NavLink to="/">
          {" "}
          <img
            src="../../images/logo-as-coudeville.png"
            alt="Logo Club"
            className=""
          />
        </NavLink>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/effectif">Effectif</NavLink>
        </li>
        <li>
          <NavLink to="/boutique">Boutique</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
