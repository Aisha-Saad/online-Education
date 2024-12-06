import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Heading from "./commponents/commen/header/Heading";
import Home from "./commponents/home/Home"
import About from "./commponents/about/About";

function App() {
  return (
    <>
      
      <Router>
      <Heading/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          
          
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
