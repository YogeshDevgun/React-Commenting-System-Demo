import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, withRouter} from 'react-router-dom';
import Users from '../../dummy/users.json';

var dummyUsers = Users
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: true,
      username:'',
      password:'',
      error: false
    }
  }

  componentWillMount(){
    console.log("ID", localStorage);
  }
  switchViewHandler() {
    this.setState({login: false, register: true});
  }

  switchViewHandlerT() {
    this.setState({login: true, register: false})
  }


  passwordHandler(e){
    console.log("Pass",e.target.value);
    this.setState({password: e.target.value, error:false})
  }

  usernameHandler(e){
    console.log("use", e.target.value);
    this.setState({username: e.target.value, error:false})
  }

  loginUserHandler(){
    var abc = dummyUsers.findIndex((item)=>{
      return (item.username==this.refs.username.value && item.password==this.refs.password.value)
    })
    if(abc>-1){
      localStorage.setItem('id', dummyUsers[abc].id);
          localStorage.setItem('name', dummyUsers[abc].name);
          localStorage.setItem('img_url', dummyUsers[abc].img_url);
this.props.history.push('/postpage')
    }
    else{
       this.setState({error: true})
    }
  }
  render() {
    var viewSwitch, errorDisplay;
    if(this.state.error){
      console.log("fuck");
    errorDisplay = <div className="error_display">
      Username/Password does not match
    </div>
  }else{
    errorDisplay =""
  }

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
          <input type="text" ref="username"></input>
        </div><br/>
        <div className="signup_inputs">
          <label>
            Password:
          </label>&nbsp;
          <input type="password" ref="password"></input>
        </div>
        {errorDisplay}

        <div className="signup_loginbutton">
          <span>Already Registered?&nbsp;</span>
          <span  onClick={this.switchViewHandler.bind(this)} className="login_button">Login</span>
        </div>
        <div className="clr"></div>
        <div className="login_actionbutton">
          <Link to="/postpage" className="login_actionbutton">  <button onClick={this.loginUserHandler.bind(this)}>Login</button></Link>

      </div>
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
export default SignUp
