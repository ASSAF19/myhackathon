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
            comment: "",
            picture: ""


        }
    }
    updateInputValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })


    }
    AddComment = () => {
        axios.post('http://localhost:5555/comment', {
            username: this.state.userName,
            text: this.state.comment,
            img: this.state.picture
        }).then((data) => {
            console.log(data)
            let NewComments = [...this.state.comments]
            NewComments.push(data.data);
            this.setState({ comments: NewComments })

        })

            .catch(function (error, res) {
                console.error(error);
            });

    }

    componentDidMount = () => {
        console.log("hey");

        axios.get('http://localhost:5555/comment').then((data) => {

            this.setState({ comments: data.data })

        })
    }
     deleteComment = (index) =>{
        let NewComment= [...this.state.comments];
        NewComment.splice(index,1);
        this.setState({ comments: NewComment })

        
        }
     


    

    render() {
        return (
            <div>

                <p className="inputStyle1"> Username:  <input type="text" className="inputStyle" placeholder="text here.." name="userName" value={this.state.userName} onChange={this.updateInputValue}></input> </p>
                <p className="inputStyle2"> Comment:  <input type="text" className="inputStyle" placeholder="text here.." name="comment" value={this.state.comment} onChange={this.updateInputValue}></input> </p>
                <p className="picture" > Picture url<input type="text" className="pictureStyle" name="picture" value={this.state.picture} onChange={this.updateInputValue} /></p>
                <button className="AddBtn" onClick={this.AddComment}>Post</button>
                {this.state.comments.map((comment,i) =>
                    <Comment  comment={comment} index={i} delete={this.deleteComment}/>
                )}



            </div>
        )
    }

}
export default Comments;