import React, { Component } from "react";
import "./App.css";
import Cardlist from "../Component/Cardlist";

import Scroll from "../Component/Scroll";
import Search from "../Component/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  // this a syntehtic event listener
  handleChange = (e) => {
    // property.value allows us to get hold of what the person is typing

    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state);
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter((rob) => {
      return (
        rob.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
        rob.email.toLowerCase().includes(this.state.searchField.toLowerCase())
      ); //the condition in the filter array is that bring me the names of if what we type in the search can be found in the robot data
    });
    if (this.state.robots.length === 0) {
      return <h1 className="tc"> Loading</h1>;
    } else {
      return (
        <div className="App">
          <h1>ROBOFRIENDS</h1>
          <Search search={this.handleChange} />
          <Scroll>
            {/* over here we are wrapping cardlist component    we can do this cus we need to use this method called props.children in the scroll component */}
            <Cardlist robot={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
