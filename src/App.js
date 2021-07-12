import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/" component={About} />
      <Route exact path="/work" component={Work} />
      <Footer />
    </Router>
  );
}

export default App;
