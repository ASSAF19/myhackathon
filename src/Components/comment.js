import React from 'react';
import { Component } from 'react';

class Comment extends Component {
    constructor() {
        super()
    }
    render() {
        return (

                <span> {this.props.Comment}</span>

               );
    }
}
export default Comment;
