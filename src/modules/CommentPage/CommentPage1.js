import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      postComments: ["username": "Yogesh"],
      commentValue:''
    }

  }
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.comment).focus();
  }
  AddComment(e){
      this.setState({commentValue:e.target.value})
  }
  BlurHandler(e){
      e.target.value=''
    }
  DetectEnter(...e){
    console.log(e[0],e[1].keyCode,e)
    if(e[1]=='Reply'){
      console.log('Here inside reply')
      if(e[2].keyCode==13){
      var data= {
        Answer : this.state.ReplyVal
      }
    //       axios.post(API.prefix+APISUB.pcard+"/postanswer/" +e[0],data, {withCredentials: true}).then((res) => {
    //   console.log(res)
    //     this.UpdateComments()
    // })
    this.setState({ReplyClicked:false,ReplyVal:''})
    }
    }
    else{
    if(e[1].keyCode==13){
      e[1].target.value=''

      console.log('Inside Comment')
      var data= {
        Question : this.state.InputVal
      }
    //       axios.post(API.prefix+APISUB.pcard+"/postQuestion/" +e[0],data, {withCredentials: true}).then((res) => {
    //   console.log(res)
    //     this.UpdateComments()
    // })
    this.setState({ReplyClicked:false,ReplyVal:''})
  }}

  }
  ReplytoPost(e,updation){
  console.log('reply to post is clcicked',e)
  this.state.Feeds.map((item,indexP)=>{

    item.Comments.map((val,index)=>{
      if(indexP==updation){
      if(e==index){
        val.edit=true
      }
      else{
        val.edit=false
      }
    }
    else{
      val.edit=false
    }
    })

  })

  this.setState({Feeds:this.state.Feeds
    ,ReplyClicked:true})
    console.log(this.state.Feeds)
}
  render() {
    if(item.edit==true){
      ShowReplyBox =(
        <input type="text" autoFocus onBlur={this.ReplyBlurHandler.bind(this)} key={replyid} placeholder="Reply"value={this.state.ReplyVal} onChange={this.ReplyToComment.bind(this)} onKeyDown={this.DetectEnter.bind(this,replyid,'Reply')}/>
      )
    }
    else{
      ShowReplyBox=""
    }

    var replies = item.Answer?item.Answer.map((item,index)=>{
        var user = item.CommentedUser[0];
        var replyidd = item._id
        return (
          <div key={item._id} className="Post Reply">
            <div className="commentToCom_Container disp_inliFl">
              <div className="comment_left">
                <img src={Defaultpic(user.preferences)} style={{height:'30px',width:'30px'}}></img>

              </div>
              <div className="comment_right ">
                <div classNae="disp_inliFl">
                  <span className="commentedBy_user">..{user.firstname + ' ' + user.lastname} {':    '}</span>
                  <span className="comment_text">{item.Answers}</span>
                </div>
                <div className="disp_inliFl comment_actions">
                  <span>  {(new Date(item.ReplyTime).toDateString())}</span>
                  <span>&nbsp;<a className="pointer" onClick={this.DeleteComment.bind(this,'reply',replyidd,quesid)}>Delete</a></span>
                  <span>&nbsp;  <a className="pointer" onClick={this.ReplytoPost.bind(this,CommentIndex,indexOfUpdation)}>Reply</a></span>
                </div>
              </div>
              </div>

          </div>
        )
      }):''

      
    var comments = this.state.postComments.map((item, index) => {
      return(
        <div>
          <div className=" displ_inlif">
            <div className="comment_left">
              <img className="user_img" alt="NA"></img>
            </div>
            <div className="comment_right">
              <div>Username will come here</div>
              <div>Comment will come here</div>
              <div className="comment_actions">
                <span>Like</span>
                  <span>&nbsp; <a className="pointer" onClick={this.ReplytoPost.bind(this,CommentIndex,indexOfUpdation)}>Reply</a></span>
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          </div>
          <div className="commentToComment_top_margin">
             <span>{replies}</span>
                {ShowReplyBox}
          </div>
        </div>
      );
    })
    return (
      <div className="comment_container">
        <form>
          <textarea ref="comment" value={this.state.commentInput}></textarea>
          <input type="text" ref='AddCommentForPost' placeholder="Add a comment.." onChange={this.AddComment.bind(this)} onBlur={this.BlurHandler.bind(this)} onKeyDown={this.DetectEnter.bind(this,item._id )}/>

          <input type='submit' value='Post Comment'/>
        </form>
        <div>
         {comments}
        </div>
      </div>
    )
  }
};
