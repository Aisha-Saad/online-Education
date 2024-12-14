import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./commponents/commen/header/Heading";
import Home from "./commponents/home/Home";
import About from "./commponents/about/About";
import CourseHome from "./commponents/allcourses/CourseHome";
import Team from "./commponents/team/Team";

function App() {
  return (
    <>
      
      
    
      <Router>
        <Heading />
          <Link to="/">{Home}</Link>
          <Link to="/about">{About}</Link>
          <Link to="/courses">{CourseHome}</Link>
          <Link to="/team">{Team}</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>  
      </Router>
    </>
  );
}

export default App;
