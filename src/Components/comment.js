import React from 'react';
import { Component } from 'react';

class Comment extends Component {
    constructor() {
        super()
    }
    DeletePost(){
        let index  = this.props.index
        this.props.delete(index)
    }
    render() {
        return (
<div>
                <span> {this.props.comment.username }</span>
                <span> {this.props.comment.text }</span>
                <img src={this.props.comment.img} ></img>
                <button onClick={this.DeletePost}>Delete </button>
</div>
               );
    }
}
export default Comment;
