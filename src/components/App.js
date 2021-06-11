import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/shared";
import Dashboard from "./Dashboard";
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
