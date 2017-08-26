import React from 'react';
import ReplyToReplyComponent from './ReplyToReply';

let CommentIndex = ''
export default class MainCommentThread extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      replyBox: false,
      editreplyBox: false
    }
  }
  replyBoxHandler(index) {
    CommentIndex = index
    this.setState({replyBox: true})
  }

  editBoxHandler(index){
    CommentIndex = index
    this.setState({editreplyBox: true})

  }

  onBlurHandler(){
    this.setState({editreplyBox: false})
  }

  componentDidMount(){
    this.refs.comment.value = this.props.item.reply.replyData
  }

  render() {
    var index = this.props.index
    var item = this.props.item
    var ShowReplyBox = '', mainComment=''
    if (this.state.replyBox == true) {
      ShowReplyBox = (<input placeholder="Write a reply..." type="text" ref="Reply" onKeyPress={(e) => {
        this.props.OnCommentKeyPress(e.charCode, this, index);
        e.charCode == '13'? this.setState({replyBox: false}): ''
      }} autoFocus/>)
    } else {
      ShowReplyBox = ""
    }

    if(!this.state.editreplyBox){
      mainComment = (
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
              <span className="act" onClick={this.editBoxHandler.bind(this)}>Edit</span>
              <span role="presentation" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
              <span onClick={() => {
                this.props.CommentRemover(index)
              }} className="act">Delete</span>
            </div>
          </div>
      )
    }else{
      mainComment = (
        <input ref="comment" onKeyPress={this.props.CommentBinder} onBlur={this.onBlurHandler.bind(this)}></input>
      )
    }

    return (
      <div key={index}>
        <div className="">
          <div className="comment_box disp_inliFl">
            <div className="comment_left">
              <img src={item.reply.replyByUser.userImg} className="user_img" alt="na"></img>
            </div>
            {mainComment}
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
    </div>
    );
  }
}
