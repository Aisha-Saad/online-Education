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
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="link">All courses</Link>
            </li>
            <li>
              <Link to="/about" className="link">About</Link>
            </li>
            <li>
              <Link to="/team" className="link">team</Link>
            </li>
            <li>
              <Link to="/pricing" className="link">pricing</Link>
            </li>
            <li>
              <Link to="/blog" className="link">blog</Link>
            </li>
            <li>
              <Link to="/contact" className="link">contact</Link>
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
