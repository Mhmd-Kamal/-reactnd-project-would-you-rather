import React, { Component } from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
class PollStats extends Component {
  render() {
    console.log(this.props);
    const {
      author,
      avatar,
      optionOne,
      optionTwo,
      optionOneCount,
      optionTwoCount,
      totalCount,
      yourVote,
    } = this.props;

    return (
      // <div className="poll">
      <div className="poll-results">
        <div className="poll-header">{`${author} asked:`}</div>
        <div className="poll-content">
          <div className="avatar">
            <img className="avatar-img" src={avatar} alt="profile avatar" />
          </div>
          <div className="poll-details">
            <h3>Results:</h3>
            <div className="option">
              {yourVote === "optionOne" && (
                <div className="vote-flag">your Vote</div>
              )}
              <p className="option-text">{optionOne}</p>
              <div className="result-progress">
                <ProgressBar
                  striped
                  now={(optionOneCount / totalCount) * 100}
                />
              </div>
              <p className="option-result">
                {optionOneCount} out of {totalCount} votes
              </p>
            </div>
            <div className="option">
              {yourVote === "optionTwo" && (
                <div className="vote-flag">your Vote</div>
              )}
              <p className="option-text">{optionTwo}</p>

              <div className="result-progress">
                <ProgressBar
                  striped
                  now={(optionTwoCount / totalCount) * 100}
                />
              </div>
              <p className="option-result">
                {optionTwoCount} out of {totalCount} votes
              </p>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => ({
  authedUser,
  qid: id,
  author: users[questions[id].author].name,
  avatar: users[questions[id].author].avatarURL,
  optionOne: questions[id].optionOne.text,
  optionOneCount: questions[id].optionOne.votes.length,
  optionTwo: questions[id].optionTwo.text,
  optionTwoCount: questions[id].optionTwo.votes.length,
  totalCount:
    questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length,
  yourVote: questions[id].optionOne.votes.includes(authedUser)
    ? "optionOne"
    : questions[id].optionTwo.votes.includes(authedUser)
    ? "optionTwo"
    : null,
});
export default connect(mapStateToProps)(PollStats);
