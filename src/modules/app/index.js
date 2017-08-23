import React from 'react';
import {render} from 'react-dom';
import CommentPage from './../CommentPage/CommentPage';
import Signup from './../SignUp/SignUp';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
const routes = (
    <Switch>
      <Route exact path ="/" component = {Signup} />
      <Route path ="/commentPage" component = {CommentPage} />
    </Switch>
);
export default routes;
