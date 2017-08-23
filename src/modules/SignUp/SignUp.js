import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, withRouter} from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>Welcome To Commenting Sytem Demo just like FB</span>
        <label>
          Username:
        </label>
        <input type="text"></input>
          <label>
            Password:
          </label>
        <input type="password"></input>
        <Link to="/postpage">Register</Link>
      </div>

    );
  }

}
export default SignUp;
