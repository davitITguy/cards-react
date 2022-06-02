import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      medCard: [
        {
          id: 1,
          image: require("../../../assets/images/medTeam1.jpeg"),
          name: "Dr. Adam Jonson",
          jobTitle: "MEDICAL DIRECTOR",
          desc: "Sample text. Click to select the text box. Click again or double click to start editing the text",
        },
        {
          id: 2,
          image: require("../../../assets/images/medTeam2.jpeg"),
          name: "DR. Simon Larson",
          jobTitle: "FAMILY DOCTOR",
          desc: "Sample text. Click to select the text box. Click again or double click to start editing the text",
        },
        {
          id: 3,
          image: require("../../../assets/images/medTeam3.jpeg"),
          name: "DR. Marry Hudson",
          jobTitle: "HEMATOLOGIST",
          desc: "Sample text. Click to select the text box. Click again or double click to start editing the text",
        },
      ],
    };
  }
  render() {
    return (
      <div style={parentEl} className="blueLine">
        {this.state.medCard.map(item => {
          return (
            <Card
              key={item.id}
              img={item.image}
              name={item.name}
              jobRole={item.jobTitle}
              details={item.desc}
            />
          );
        })}
      </div>
    );
  }
}
const parentEl = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default Cards;
