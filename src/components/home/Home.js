import React, { Component } from "react";
import Header from "../header/Header";
import Cards from "./Cards/Cards";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
      </div>
    );
  }
}

export default Home;
