import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is a great framework.</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi, I'm a react App."));
  }
}

export default App;
