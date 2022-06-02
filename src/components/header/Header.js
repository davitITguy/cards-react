import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <h1 style={headerStyle}>Meet The Team</h1>
        <p style={paraStyle}>
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>
      </div>
    );
  }
}

const mainStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column ",
};

const headerStyle = {
  color: "#3f96e8",
  fontSize: "26px",
};
const paraStyle = {
  color: "#111",
  fontSize: "14px",
};

export default Header;
