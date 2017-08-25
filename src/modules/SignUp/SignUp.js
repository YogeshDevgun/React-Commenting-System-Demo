import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, withRouter} from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: true
    }
  }

  switchViewHandler() {
    this.setState({login: false, register: true});
  }

  switchViewHandlerT() {
    this.setState({login: true, register: false})
  }
  render() {
    var viewSwitch;
    if (this.state.register) {
      viewSwitch =
      <div>
        <div className="signup_title"> Register as new user</div>
        <div className="signup_inputs">
          <label>
            Username:
          </label>
          <input type="text"></input>
        </div><br/>
        <div className="signup_inputs">
          <label>
            Password:
          </label>&nbsp;
          <input type="password"></input>
        </div>
        <div className="signup_loginbutton">
          <span>Already Registered?&nbsp;</span>
          <span  onClick={this.switchViewHandlerT.bind(this)} className="login_button">Login</span>
        </div>
        <div className="clr"></div>
        <Link to="/postpage" className="register_button"><button>Register</button></Link>
      </div>
    } else if (this.state.login) {
      viewSwitch =
      <div>
        <div className="signup_title">Login</div>
        <div className="signup_inputs">
          <label>
            Username:
          </label>
          <input type="text"></input>
        </div><br/>
        <div className="signup_inputs">
          <label>
            Password:
          </label>&nbsp;
          <input type="password"></input>
        </div>
        <div className="signup_loginbutton">
          <span>Already Registered?&nbsp;</span>
          <span  onClick={this.switchViewHandler.bind(this)} className="login_button">Login</span>
        </div>
        <div className="clr"></div>
        <Link to="/postpage" className="login_actionbutton"><button>Login</button></Link>
      </div>
    }
    return (
      <div>
        <div className={this.state.login?"signup_container":"login_container"}>
          <div className="singup_title">Commenting Sytem Demo in ReactJS</div>
          {viewSwitch}
        </div>
      </div>
    );
  }
}
export default SignUp;
