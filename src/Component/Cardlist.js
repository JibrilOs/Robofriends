import React, { Component } from "react";
import Card from "./Card";

class Cardlist extends Component {
  render() {
    const { robot } = this.props;

    return (
      <div>
        <div className="App">
          {robot.map((user, i) => {
            return (
              <Card
                id={robot[i].id}
                name={robot[i].name}
                email={user.email}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cardlist;
