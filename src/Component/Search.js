import React, { Component } from "react";
import "tachyons";

class Search extends Component {
  render() {
    return (
      <div className="tc mt2 pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots "
          onChange={this.props.search}
        ></input>
      </div>
    );
  }
}

export default Search;
