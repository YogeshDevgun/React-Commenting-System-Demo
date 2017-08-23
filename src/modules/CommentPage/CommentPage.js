import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      postComments: []

    }

  }
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.comment).focus();
  }
  render() {
    var comments = this.state.postComments.map((item, index) => {
      return(
        <div>One</div>
      );
    })
    return (
      <div>
        <form>
          <textarea ref="comment" value={this.state.commentInput}></textarea>
          <input type='submit' value='Post Comment'/>
        </form>
        <div>
         {comments}
        </div>
      </div>
    )
  }
};
