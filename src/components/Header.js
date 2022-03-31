import React from "react";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <img src="./media/profile.png" alt="profil-pic" />
        </li>
        <li>
          <NavLink to="/">
            <i className="fas fa-home"></i>
            <span>Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/competences">
            <i className="fas fa-mountain"></i>
            <span>Compétences</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            <i className="fas fa-images"></i>
            <span>Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <i className="fas fa-book"></i>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default header;
