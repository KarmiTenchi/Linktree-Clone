import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
