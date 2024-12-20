import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./commponents/commen/header/Heading";
import Home from "./commponents/home/Home";
import About from "./commponents/about/About";
import CourseHome from "./commponents/allcourses/CourseHome";
import Team from "./commponents/team/Team";
import Pricing from "./commponents/pricing/Pricing";
import Blog from "./commponents/blog/Blog";
import Contact from "./commponents/contact/Contact";
import Footer from "./commponents/commen/footer/Footer";

function App() {
  return (
    <>
      
      
    
      <Router>
        <Heading />
          <Link to="/">{Home}</Link>
          <Link to="/about">{About}</Link>
          <Link to="/courses">{CourseHome}</Link>
          <Link to="/team">{Team}</Link>
          <Link to="/pricing">{Pricing}</Link>
          <Link to="/blog">{Blog}</Link>
          <Link to="/contact">{Contact}</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
      <Footer/>
      </Router>
    </>
  );
}

export default App;
