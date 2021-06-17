import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Route, Redirect } from "react-router-dom";

import Poll from "./Poll";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import "./app.scss";
import PollStats from "./PollStats";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import LogIn from "./LogIn";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    const { loading, isAuthenticated } = this.props;

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );

    return (
      <div>
        <NavBar />
        <LoadingBar />
        {loading ? null : (
          <div className="container">
            <Route path="/login" component={LogIn} />
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/add" component={NewPoll} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <PrivateRoute path="/questions/:qid" component={Poll} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ loadingBar, authedUser }) => ({
  loading: loadingBar.default === 1 || loadingBar.default === undefined,
  isAuthenticated: authedUser !== null,
});
export default connect(mapStateToProps)(App);
