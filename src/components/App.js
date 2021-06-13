import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

import "./app.scss";
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveData());
  }
  render() {
    return (
      <div>
        <div className="nav">
          <NavBar />
        </div>

        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
