import React, { Component } from "react";
import { connect } from "react-redux";
import { AiTwotoneTrophy } from "react-icons/ai";

class UserCard extends Component {
  render() {
    const { name, avatarURL, answers, questions } = this.props.user;
    const answersCount = Object.keys(answers).length;
    const questionsCount = Object.keys(questions).length;
    return (
      <div className="billboard">
        <div className="triangle-topleft">
          <AiTwotoneTrophy className="trophy" />
        </div>
        <div className="avatar">
          <img className="avatar-img" src={avatarURL} alt="profile avatar" />
        </div>
        <div className="stats">
          <h2>{name}</h2>
          <p className="stats-text">
            Answered questions
            <span className="count">{answersCount}</span>
          </p>
          <p className="stats-text">
            Created questions
            <span className="count">{questionsCount}</span>
          </p>
        </div>
        <div className="score">
          <p className="score-title">Score</p>
          <p className="score-count">{answersCount + questionsCount}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { uid }) {
  return {
    user: users[uid],
  };
}
export default connect(mapStateToProps)(UserCard);
