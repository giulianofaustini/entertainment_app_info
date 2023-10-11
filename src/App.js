
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Activity } from "./pages/Activity";
import { WheaterFetch } from "./pages/WheaterFetch"
import { FirstWebPage } from "./pages/FirstWebPage";



import "./App.css";


function App() {
  return(
  <div className="app">
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={<FirstWebPage/> } />
        <Route path="/Activity" element={<Activity/> } />
        <Route path="/WheaterFetch" element={<WheaterFetch/> } />
      </Routes>
    </Router>
  </div>
)}

export default App;
