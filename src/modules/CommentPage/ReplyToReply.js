import React from 'react'

export default class ReplytoReply extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var indexe = this.props.indexe;
    var items = this.props.items
    return (
      <div key={indexe} className="Post Reply">
        <div className="commentToCom_Container disp_inliFl">
          <div className="commentToCom_left">
            <img src={'http://lorempixel.com/26/26'} alt="na"></img>
          </div>
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
              <span className="act">Edit</span>
              <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
              <span onClick={()=>{this.props.ReplyRemover(this.props.indexP,indexe)}} className="act">Delete</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
