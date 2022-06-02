import React, { Component } from "react";
import Card from "./Card";

export class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      medCard: [
        {
          id: 1,
          image: require("../../../assets/images/medTeam1.jpeg"),
          name: "Name",
          jobTitle: "role",
          desc: "lorem",
        },
        {
          id: 2,
          image: require("../../../assets/images/medTeam2.jpeg"),
          name: "Name",
          jobTitle: "role",
          desc: "lorem",
        },
        {
          id: 3,
          image: require("../../../assets/images/medTeam3.jpeg"),
          name: "Name",
          jobTitle: "role",
          desc: "lorem",
        },
      ],
    };
  }
  render() {
    return (
      <div>
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

export default Cards;
