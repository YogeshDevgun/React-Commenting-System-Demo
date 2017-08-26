import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import MainCommentThread from './MainCommentThread';

let CommentIndex = ''
let CommentStatic = []
export default class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      postComments: [],
      replyBox: false
    }
    this.CommentBinder = this.CommentBinder.bind(this)
  }

  componentDidMount() {
    this.setState({postComments: CommentStatic})
    ReactDOM.findDOMNode(this.refs.comment).focus();
  }

  CommentRemover(index) {
    console.log(index)
    CommentStatic.splice(index, 1)
    this.forceUpdate()
  }
  CommentLike(index) {
    CommentStatic[index].like_count++;
    this.forceUpdate()
  }

  ReplyLike(index1, index2) {
    CommentStatic[index1].reply.replyToReply[index2].like_count++;
    this.forceUpdate();
  }

  ReplyRemover(index1, index2) {
    console.log(index1, index2)
    // CommentStatic.splice(index,1)
    CommentStatic[index1].reply.replyToReply.splice(index2, 1)
    this.forceUpdate()
  }

  CommentBinder(e) {
    if (e.charCode == '13') {
      if (this.refs.comment.value) {
        CommentStatic.splice(0, 0, {
          "reply": {
            "rep_id": "1",
            "replyData": this.refs.comment.value,
            "replyByUser": {
              "id": localStorage.getItem("id"),
              "name": localStorage.getItem("name"),
              "userImg": localStorage.getItem("img_url")
            },
            "replytime": (new Date()).toDateString,
            "replyToReply": []
          },
          "like_count": 0,
          "edit": false
        })
        this.refs.comment.value = ''
        this.refs.comment.blur()
        this.forceUpdate()
      }
    }
  }

  HandleReply(e, a, c) {
    console.log(e, a)
    if (e == '13') {
      if (a.refs.Reply.value) {
        CommentStatic[c].reply.replyToReply.splice(0, 0, {
          "like_count": 0,
          "rep_tor_id": "111",
          "replyToReplyData": a.refs.Reply.value,
          "replyToReplyByUser": {
            "id": localStorage.getItem("id"),
            "name": localStorage.getItem("name"),
            "userImg": localStorage.getItem("img_url")
          }
        })
        this.forceUpdate()
      }
    }
  }

  render() {
    var comments = CommentStatic.map((item, index) => {
      console.log("Main",item)
      return <MainCommentThread ReplyLike={this.ReplyLike.bind(this)} CommentLike={this.CommentLike.bind(this)} ReplyRemover={this.ReplyRemover.bind(this)} CommentRemover={this.CommentRemover.bind(this)} OnCommentKeyPress={this.HandleReply.bind(this)} item={item} index={index} key={index}/>
    })
    return (
      <div className="comment_container">
        <input type="text" placeholder="Write a comment..." ref="comment" onKeyPress={this.CommentBinder}></input>
        <div>
          {comments}
        </div>
      </div>
    )
  }
};
