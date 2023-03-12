import React, { Component } from "react";
import "./App.css";
import {CardList} from "./Components/Card-List/index";
import { Search } from "./Components/SearchBox/index";
import Test from "./Test";

export default class Appreact extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((el) => el.name.toLowerCase().includes(searchField) ||
     el.username.toLowerCase().includes(searchField) || el.email.toLowerCase().includes(searchField) 
     || el.phone.includes(searchField));
    return (
      <div className="App">
        <h1>Robotuudiin hailt</h1>
        <Search onSearch={this.onSearchChanged} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}