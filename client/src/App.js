import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Sound from "./components/pages/Sound";
import Design from "./components/pages/Design";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <body style={bodyStyle}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/design" component={Design} />
          <Route path="/sound" component={Sound} />
        </body>
      </Router>
    </div>
  );
}

// Body
const bodyStyle = {
  background: "#eee",
  color: "#000",
  padding: "10px"
};

export default App;
