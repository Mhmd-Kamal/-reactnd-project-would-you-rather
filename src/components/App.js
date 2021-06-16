import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";

import Poll from "./Poll";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import "./app.scss";
import PollStats from "./PollStats";
import Billboard from "./Billboard";
import NewPoll from "./NewPoll";
import LogIn from "./LogIn";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <LoadingBar />
        <div className="nav">
          <NavBar />
        </div>
        {loading ? null : <LogIn />}
      </div>
    );
  }
}
const mapStateToProps = ({ loadingBar, questions }) => ({
  loading: loadingBar.default === 1 || loadingBar.default === undefined,
});
export default connect(mapStateToProps)(App);
