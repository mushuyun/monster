import React, { Component } from 'react';
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./styles/app.css";

// Use arrow funciotn on any class methods which are not part of React (such as render(), componentDidMount(), etc.)

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ""
    };
  };

  //*******/ must use ES6 arrow funtion to make "this" to be binded to App component
  // ******not function, not handleChange(e){}******
  //&&&&& THIS WORKS!
  // handleChange = e => {
  //   this.setState({ searchField: e.target.value });
  // }

  // ****** if only one line, can be used like this. 
  handleChange = e => this.setState({ searchField: e.target.value }); 

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters: users}))
    };

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <header>
          Monster Fun!
        </header>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}


export default App;
