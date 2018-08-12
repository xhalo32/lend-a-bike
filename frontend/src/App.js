import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/Memos.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Memos />
      </div>
    );
  }
}
export default App;

// vim: et sw=2 ts=2 :
