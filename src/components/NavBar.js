import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links" >
        <Link to="/"> HOME</Link>
        <Link to="/Activity">Activity</Link>
        <Link to="/WheaterFetch">Wheater</Link>
        <Link to="/Tv">Tv Shows</Link>
        <Link to="/NasaPictures"> Nasa </Link>
      </div>
    </div>
  );
};
