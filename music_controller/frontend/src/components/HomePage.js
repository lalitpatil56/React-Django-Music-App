import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {
  Link,
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <h1>This is Home Page</h1>
          </Route>
          <Route path='/join' component={RoomJoinPage} />
          <Route path='/create' component={CreateRoomPage} />
        </Switch>
      </Router>
    );
  }
}
