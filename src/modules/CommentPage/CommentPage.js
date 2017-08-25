import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import CommentStatic from '../../dummy/comments.json';

export default class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      postComments: [],
      replyBox: false,

    }

  }
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.comment).focus();
  }

  replyBoxHandler(){
    this.setState({replyBox:true})
  }
  render() {
    var ShowReplyBox
    if(this.state.replyBox==true){
      ShowReplyBox =(
        <input type="text" autoFocus/>
      )
    }
    else{
      ShowReplyBox=""
    }
    var replies = CommentStatic.map?CommentStatic.map((item,index)=>{
        return (
          <div key={index} className="Post Reply">
            <div className="commentToCom_Container disp_inliFl">
              <div className="comment_left">
                <img alt="na" style={{height:'30px',width:'30px'}}></img>
              </div>
              <div className="commenttocomment_right ">
                <div className="">
                  <div className="comment_username">{item.reply[0].replyToReply[0].replyToReplyByUser.name}
                  </div>
                  <div className="comment_text">{item.reply[0].replyToReply[0].replyToReplyData}</div>
                </div>
                <div className="disp_inliFl comment_actions">
                  <span className="act">Like</span>
                  <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <span className="pointer act" onClick={this.replyBoxHandler.bind(this)}>Reply</span>
                  <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <span className="act">Edit</span>
                  <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <span className="act">Delete</span>
                </div>
              </div>
              </div>

          </div>
        )
      }):''
    var comments = CommentStatic.map((item, index) => {
      return(
        <div>
          <div className="comment_box displ_inlif">
            <div className="comment_left">
              <img className="user_img" alt="na"></img>
            </div>
            <div className="comment_right">
              <div className="comment_username">{item.reply[0].replyByUser.name}</div>
              <div  className="comment_text">{item.reply[0].replyData}</div>
              <div className="comment_actions">
                <span className="act">Like</span>
                <span role="presentation" aria-hidden="true"> · </span>
                  <span className="act">Reply</span>
                  <span role="presentation" aria-hidden="true"> · </span>
                <span className="act">Edit</span>
                <span role="presentation" aria-hidden="true"> · </span>
                <span className="act">Delete</span>
              </div>
            </div>
          </div>
          <div className="commentToComment_top_margin">
             <div>
               {item.reply[index].replyToReply.map((items, indexe) => {
                   return (<div key={indexe} className="Post Reply">
                     <div className="commentToCom_Container disp_inliFl">
                       <div className="comment_left">
                         <img alt="na" style={{height:'30px',width:'30px'}}></img>
                       </div>
                       <div className="commenttocomment_right ">
                         <div className="">
                           <div className="comment_username">{items.replyToReplyByUser.name}
                           </div>
                           <div className="comment_text">{items.replyToReplyData}</div>
                         </div>
                         <div className="disp_inliFl comment_actions">
                           <span className="act">Like</span>
                           <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
                           <span className="pointer act" onClick={this.replyBoxHandler.bind(this)}>Reply</span>
                           <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
                           <span className="act">Edit</span>
                           <span role="presentation" aria-hidden="true">&nbsp;·&nbsp;</span>
                           <span className="act">Delete</span>
                         </div>
                       </div>
                       </div>

                   </div>)

               })}
             </div>
                {ShowReplyBox}
          </div>
        </div>
      );
    })
    return (
      <div className="comment_container">
        <form>
          <input type="text" placeholder="Write a comment..." ref="comment" value={this.state.commentInput}></input>
          {/*<input type='submit' value='Post Comment'/>*/}
        </form>
        <div>
         {comments}
        </div>
      </div>
    )
  }
};
