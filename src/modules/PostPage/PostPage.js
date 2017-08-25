import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import CommentPage from '../CommentPage/CommentPage';
export default class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post_container">
        {/*<Link to="/">
          Register as new user
        </Link><br/><br/>*/}
        <div className="post_update disp_inliFl">
          <div className="user_image">
            <img src={'http://lorempixel.com/45/45'}  alt="na"></img>
          </div>
          <div className="user_details">
            <div className="post_username">Yogesh Devgun</div>
            <div className="loc_time_container disp_inliFl">
              <div>10 hrs</div>
              <div className="post_location">Hyderabad</div>
            </div>
          </div>
        </div>
        <div className="post">Time is precious. Waste it wisely.</div>
        <CommentPage/>
      </div>
    )
  }
};
