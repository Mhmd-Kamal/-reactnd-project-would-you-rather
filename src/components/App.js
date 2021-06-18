import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import "./app.scss";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import LogIn from "./LogIn";
import ViewPoll from "./ViewPoll";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    const { loading, isAuthenticated } = this.props;
    console.log(isAuthenticated);
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            // <Redirect to="/login" />
            <LogIn {...props} />
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
            <Switch>
              <PrivateRoute path="/" exact component={Dashboard} />
              <PrivateRoute path="/add" component={NewPoll} />
              <PrivateRoute path="/leaderboard" component={Leaderboard} />
              <PrivateRoute path="/questions/:qid" component={ViewPoll} />
              <Route component={LogIn} />
            </Switch>
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
