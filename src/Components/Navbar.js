import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div className="topnav">

                    <span><Link to="/Home">Home</Link></span>
                    <span><Link to="/actions">Actions</Link></span>
                    <span><Link to="/analytics">About </Link></span>



            </div>
        );
    }
}
export default Navbar;
