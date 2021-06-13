import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

class Dashboard extends Component {
  state = { renderAnswered: false };

  render() {
    console.log(this.props);
    // const { answered, unAnswered } = this.props;
    return (
      <div>
        <div className="dashboard">
          <div className="title">
            <h2
              onClick={() => {
                this.setState({ renderAnswered: true });
              }}
            >
              Unanswered Questions
            </h2>
            <h2
              onClick={() => {
                this.setState({ renderAnswered: false });
              }}
            >
              Answered Questions
            </h2>
          </div>
          <div className="polls">
            <QuestionPreview id={"6ni6ok3ym7mf1p33lnez"} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const answered = Object.keys(questions).filter(
    (id) =>
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser)
  );

  const unAnswered = Object.keys(questions).filter(
    (id) =>
      !questions[id].optionOne.votes.includes(authedUser) &&
      !questions[id].optionTwo.votes.includes(authedUser)
  );

  return {
    answered,
    unAnswered,
  };
};
export default connect(mapStateToProps)(Dashboard);
