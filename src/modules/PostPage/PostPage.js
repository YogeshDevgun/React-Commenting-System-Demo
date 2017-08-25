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
        <div className="post">I Have Good News And Bad News To Tell You. The Bad News? I Have No Good News. And The Good News? I Have No Bad News.
          Well I could agree with you, but then we’d both be wrong. So great power comes with great electricity bills.
        </div>
        <CommentPage/>
      </div>
    )
  }
};
