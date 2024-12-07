import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Heading from "./commponents/commen/header/Heading";
import Home from "./commponents/home/Home";
import About from "./commponents/about/About";

function App() {
  return (
    <>
      
      

      <Router>
      <Heading />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
