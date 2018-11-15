import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import './navbar.css';
import Comments from './Components/comments';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
  
    return (
      <Router>
      <div className="App">
      <Navbar/>
        <Route exact path="/Home" render={() => <Comments />} />
        <Route exact path="/about" />

      </div>
    </Router>
        );
      }
    }
    
    export default App;
