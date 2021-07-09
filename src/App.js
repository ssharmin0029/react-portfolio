import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from "./components/NavTabs";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Resume from "./components/Resume";
import './assets/css/reset.css'
import './assets/css/style.css'

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
    </Router>
  );
}

export default App;
