import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import CommentPage from '../CommentPage/CommentPage';
export default class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  logoutHandler(){
    localStorage.removeItem('id');
       localStorage.removeItem('img_url');
       localStorage.removeItem('name');
  }

  render() {
    return (
      <div className="post_container">
        <div className="post_update disp_inliFl">
          <div className="user_image">
            <img src={'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p240x240/20246367_1965989173677732_4946431613768536367_n.jpg?oh=4a42e21c7c0934b33d61649b147404c3&oe=5A1CCA42'}  alt="na"></img>
          </div>
          <div className="user_details">
            <div className="post_username">Yogesh Devgun</div>
            <div className="loc_time_container disp_inliFl">
              <div>10 hrs</div>
              <div className="post_location">Hyderabad</div>
            </div>
          </div>
          <div className="logout_button">
            <Link to="/"><button onClick={this.logoutHandler.bind(this)}>Logout</button></Link>
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
