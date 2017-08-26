import React from 'react'

export default class ReplytoReply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyToreplyEdit: false,
    }
  }

  editreplyToreply(){
    this.setState({replyToreplyEdit: true})
  }

  onBlurHandler(){
    this.setState({replyToreplyEdit: false})
  }

  resplyToReplyEdit(){}

  render() {
    var indexe = this.props.indexe;
    var items = this.props.items, replyToReply;

    if(!this.state.replyToreplyEdit){
      replyToReply = (

          <div className="commenttocomment_right ">
            <div className="">
              <div className="comment_username">{items.replyToReplyByUser.name}
              </div>
              <div className="comment_text">{items.replyToReplyData}</div>
            </div>
            <div className="disp_inliFl comment_actions">
              <span onClick={()=>{this.props.ReplyLike(this.props.indexP,indexe)}} className="act">Like({items.like_count})</span>
              <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
              <span className="pointer act" onClick={()=>{this.props.showReply(indexe)}}>Reply</span>
              <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
              <span className="act" onClick={this.editreplyToreply.bind(this)}>Edit</span>
              <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
              <span onClick={()=>{this.props.ReplyRemover(this.props.indexP,indexe)}} className="act">Delete</span>
            </div>
          </div>

      )
    } else{
      replyToReply= (
        <div className="editReply">
          <input value={items.replyToReplyData} onChange={this.resplyToReplyEdit.bind(this)} placeholder="replyToReply" onBlur={this.onBlurHandler.bind(this)}></input>
        </div>
      )
    }

    return (
      <div key={indexe} className="Post Reply">
        <div className="commentToCom_Container">
          <div className="commentToCom_wrapper disp_inliFl">
            <div className="commentToCom_left">
              <img src={items.replyToReplyByUser.userImg} alt="na"></img>
            </div>
            {replyToReply}
          </div>
        </div>
      </div>
    )
  }
}
