import React, { Component } from "react";
import { connect } from "react-redux";
import PollPreview from "./PollPreview";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="title">
            <h2>Unanswered Questions</h2>
            <h2>Answered Questions</h2>
          </div>
          <div className="polls">
            <PollPreview />
            <PollPreview />
            <PollPreview />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
