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
            <img
              className="avatar-img"
              src={"." + avatar}
              alt="profile avatar"
            />
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

const mapStateToProps = ({ questions, users, authedUser }, { qid }) => {
  return {
    authedUser,
    qid,
    author: users[questions[qid].author].name,
    avatar: users[questions[qid].author].avatarURL,
    optionOne: questions[qid].optionOne.text,
    optionOneCount: questions[qid].optionOne.votes.length,
    optionTwo: questions[qid].optionTwo.text,
    optionTwoCount: questions[qid].optionTwo.votes.length,
    totalCount:
      questions[qid].optionOne.votes.length +
      questions[qid].optionTwo.votes.length,
    yourVote: questions[qid].optionOne.votes.includes(authedUser)
      ? "optionOne"
      : questions[qid].optionTwo.votes.includes(authedUser)
      ? "optionTwo"
      : null,
  };
};
export default connect(mapStateToProps)(PollStats);
