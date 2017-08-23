import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import CommentPage from '../CommentPage/CommentPage';
export default class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">
          Register as new user
        </Link><br/><br/>
        <div>Time is precious. Waste it wisely.</div>
        <CommentPage/>
      </div>
    )
  }
};
