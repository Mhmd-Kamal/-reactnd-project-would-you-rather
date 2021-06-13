import React, { Component } from "react";
import { connect } from "react-redux";

import picture from "../utils/avatar/user.png";

class QuestionPreview extends Component {
  render() {
    console.log(this.props);
    const { question } = this.props;
    return (
      <div className="poll-preview">
        <div className="poll-header">{`${question.author} asked:`}</div>
        <div className="poll-content">
          <div className="avatar">
            <img className="avatar-img" src={picture} alt="profile avatar" />
          </div>
          <div className="poll-details">
            <h3>Would you rather:</h3>
            <p>{question.optionOne.text}</p>
            <button className="btn btn-outline-primary btn-lg btn-block">
              View Poll
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }, { id }) => ({
  question: questions[id],
});
export default connect(mapStateToProps)(QuestionPreview);
