import React from 'react';
import { Component } from 'react';
import Comment from './comment';
import axios from 'axios';



class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            userName: "",
            comment: ""

        }
    }
    updateInputValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        

    }
     AddComment = async ()=> {
       let data = await axios.post('http://www.localhost:4321/comment', {
            username: this.state.userName,
            text: this.state.comment
        })
            .then(function (response) {
                let NewComments = [...this.state.comments]
                NewComments.push(response);
                this.setState({ comments: NewComments })
            })

            .catch(function (error, res) {
                alert(error);
            });
    }
    render() {
        return (
            <div>
                <p className="inputStyle1"> Username:  <input type="text" className="inputStyle" placeholder="text here.." name="userName" value={this.state.userName} onChange={this.updateInputValue}></input> </p>
                <p className="inputStyle2"> Comment:  <input type="text" className="inputStyle" placeholder="text here.." name="comment" value={this.state.comment} onChange={this.updateInputValue}></input> </p>
                <button className="AddBtn" onClick={this.AddComment}>Add comment</button>
                {this.state.comments.map((comment) =>
                    <Comment comment={comment} />
                )} 

            </div>
        )
    }

}
export default Comments;