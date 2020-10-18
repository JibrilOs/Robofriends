import React, { Component } from "react";

class Scroll extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          overflowY: "scroll",
          border: "2px solid black",
          height: "800px",
        }}
      >
        {children}{" "}
        {/*this allows me to wrapp the scoll com ponent on the card component */}
      </div>
    );
  }
}

export default Scroll;
