import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.img} alt="team" />
        <h3>{this.props.name}</h3>
        <h4>{this.props.jobRole}</h4>
        <p>{this.props.details}</p>
      </div>
    );
  }
}

export default Card;
