import React, { useState } from "react";
import Head from "./Head";
import { Link } from "react-router-dom";

const Heading = () => {
  const [click, setClick]=useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" :"flexSB" } onClick={()=> setClick(false)}>
            <li>
              <Link to="/"></Link>Home
            </li>
            <li>
              <Link to="/courses"></Link>All courses
            </li>
            <li>
              <Link to="/about"></Link>About
            </li>
            <li>
              <Link to="/team"></Link>team
            </li>
          </ul>
          <div className="start">
            <div className="button">Get started</div>
          </div>
          <button className="toggle" onClick={()=> setClick(!click)}>
            {click ? <i className=" fa fa-times"></i> : <i className=" fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Heading;
