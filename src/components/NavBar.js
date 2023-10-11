import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links" >
        <Link to="/">First Page</Link>
        <Link to="/Activity">Activity</Link>
        <Link to="/WheaterFetch">Wheater</Link>
      </div>
    </div>
  );
};
