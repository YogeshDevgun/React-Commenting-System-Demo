import React from 'react';
import ReplyToReplyComponent from './ReplyToReply';

let CommentIndex = ''
export default class MainCommentThread extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      replyBox: false
    }
  }
  replyBoxHandler(index) {
    CommentIndex = index
    this.setState({replyBox: true})
  }

  render() {
    var index = this.props.index
    var item = this.props.item
    var ShowReplyBox = ''
    if (this.state.replyBox == true) {
      ShowReplyBox = (<input placeholder="Write a reply..." type="text" ref="Reply" onKeyPress={(e) => {
        this.props.OnCommentKeyPress(e.charCode, this, index);
        e.charCode == '13'? this.setState({replyBox: false}): ''
      }} autoFocus/>)
    } else {
      ShowReplyBox = ""
    }
    return (
      <div key={index}>
        <div className="comment_box displ_inlif">
          <div className="comment_left">
            <img src={'http://lorempixel.com/34/34'} className="user_img" alt="na"></img>
          </div>
          <div className="comment_right">
            <div className="comment_username">{item.reply.replyByUser.name}</div>
            <div className="comment_text">{item.reply.replyData}</div>
            <div className="comment_actions">
              <span onClick={() => {
                this.props.CommentLike(index)
              }} className="act">Like({item.like_count})</span>
              <span role="presentation" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
              <span onClick={this.replyBoxHandler.bind(this)} className="act">Reply</span>
              <span role="presentation" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
              <span className="act">Edit</span>
              <span role="presentation" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
              <span onClick={() => {
                this.props.CommentRemover(index)
              }} className="act">Delete</span>
            </div>
          </div>
        </div>
        <div className="commentToComment_top_margin">
          <div>
            {item.reply.replyToReply.map((items, indexe) => {
              return <ReplyToReplyComponent ReplyLike={this.props.ReplyLike} ReplyRemover={this.props.ReplyRemover} showReply={this.replyBoxHandler.bind(this)} items={items} indexP={index} indexe={indexe} key={indexe}/>
            })}
          </div>
          <div className="commentToCom_input">
            {ShowReplyBox}
          </div>
        </div>
      </div>
    );
  }
}
