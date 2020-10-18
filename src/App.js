import React, { Component } from "react";
import './App.css';
import Cardlist from "./Cardlist";

import { robot } from "./Robot";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robot,
      searchField: "",
    };
  }
  // this a syntehtic event listener 
  handleChange = (event) => {
    console.log(event.target.value) // property.value allows us to get hold of what the person is typing 
  
    const filteredRobots=this.state.robots.filter(rob=>{ return rob.name.toLowerCase().includes(this.state.searchField.toLowerCase());
})
console.log(filteredRobots);

  };

  render() {
    return (
      <div className="App">
        <Search search={this.handleChange} />
        <Cardlist robot={this.state.robots} />
      </div>
    );
  }
}

export default App;
