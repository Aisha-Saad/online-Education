import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
        <Switch>
          <Route exact path='/'  mcomponent={Home} />
          <Route exact path='/about' component={About} />
           <Route exact path='/courses' component={CourseHome} />
           <Route exact path='/team' component={Team} />
          {/* <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />  */} 
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
