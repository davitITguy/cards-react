import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={footer}>
        <p>
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>
      </div>
    );
  }
}
const footer = {
  padding: "3rem 0",
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
};
export default Footer;
