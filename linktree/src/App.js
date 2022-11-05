import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
