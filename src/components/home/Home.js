import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cards from "./Cards/Cards";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Home;
