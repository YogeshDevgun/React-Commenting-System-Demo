import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
   return(

     <div>
       <span>Start Commenting Here</span>
       <Link to="/">
         Register as new user
       </Link>
     </div>
   )
  }
};
// export default withRouter(App);
