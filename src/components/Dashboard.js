import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

class Dashboard extends Component {
  state = { renderAnswered: "unAnswered" };

  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="title">
            <h2
              className={`${
                this.state.renderAnswered === "unAnswered" && "render"
              }`}
              onClick={() => {
                this.setState({ renderAnswered: "unAnswered" });
              }}
            >
              Unanswered Questions
            </h2>
            <h2
              className={`${
                this.state.renderAnswered === "answered" && "render"
              }`}
              onClick={() => {
                this.setState({ renderAnswered: "answered" });
              }}
            >
              Answered Questions
            </h2>
          </div>
          <div className="polls">
            {this.props[this.state.renderAnswered].map((id) => (
              <QuestionPreview key={id} id={id} />
            ))}
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
