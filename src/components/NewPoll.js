import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

class NewPoll extends Component {
  state = { optionOneText: "", optionTwoText: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    // console.log(this.state);
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;
    dispatch(
      handleSaveQuestion({ optionOneText, optionTwoText, author: authedUser })
      //   redirect to home route
    );
  };
  render() {
    // console.log(this.props);
    return (
      <div className="new-poll">
        <h2 className="header">Create New Question</h2>
        <div className="question-details">
          <p>Complete the question:</p>
          <h3>would you rather ...</h3>
          <form>
            <input
              onChange={this.handleChange}
              name="optionOneText"
              type="text"
              className="input-text"
              placeholder="enter option one text here"
            />
            <p>
              <span>OR</span>
            </p>
            <input
              onChange={this.handleChange}
              name="optionTwoText"
              type="text"
              className="input-text"
              placeholder="enter option Two text here"
            />
            <button
              onClick={this.handleSubmit}
              className="btn btn-outline-primary btn-lg btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewPoll);