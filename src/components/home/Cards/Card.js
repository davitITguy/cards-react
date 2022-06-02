import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={cardBox}>
        <img style={imgStyle} src={this.props.img} alt="team" />
        <h3>{this.props.name}</h3>
        <h4>{this.props.jobRole}</h4>
        <p>{this.props.details}</p>
      </div>
    );
  }
}

const cardBox = {
  margin: "1rem",
  padding: "0 0.5rem",
  backgroundColor: "#f2f2f2",
  textAlign: "center",
  fontSize: "12px",
};

const imgStyle = {
  marginTop: "1rem",
  objectFit: "cover",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
};

export default Card;
