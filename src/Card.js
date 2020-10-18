import React, { Component } from "react";
import "tachyons";

class Card extends Component {
  render() {
    const { name, email, id } = this.props;
    return (
      <div className="bg-light-green dib  br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt="robo" />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{id}</p>
      </div>
    );
  }
}

export default Card;
