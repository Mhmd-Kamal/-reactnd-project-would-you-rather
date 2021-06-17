import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";
class Poll extends Component {
  state = {
    answer: "",
  };

  render() {
    const { author, avatar, optionOne, optionTwo, authedUser, qid, dispatch } =
      this.props;
    const handleChange = (e) => {
      this.setState({ answer: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const answer = { authedUser, qid, answer: this.state.answer };
      if (this.state.answer === "") {
        alert("Please choose an answer before submitting!");
      } else {
        dispatch(handleSaveAnswer(answer));
        // route to question statistics page
      }
    };

    return (
      // <div className="poll">
      <div className="poll">
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
            <h3>Would you rather:</h3>
            <form className="options">
              <label className="option">
                <input
                  name="option"
                  type="radio"
                  id="optionOne"
                  value="optionOne"
                  onChange={handleChange}
                />
                {optionOne}
              </label>
              <label className="option">
                <input
                  name="option"
                  type="radio"
                  id="optionTwo"
                  value="optionTwo"
                  onChange={handleChange}
                />
                {optionTwo}
              </label>
            </form>
            <button onClick={handleSubmit} className="btn btn-lg btn-block">
              Submit
            </button>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { match }) => {
  const qid = match.params.qid;
  console.log(match);
  return {
    authedUser,
    qid,
    author: users[questions[qid].author].name,
    avatar: users[questions[qid].author].avatarURL,
    optionOne: questions[qid].optionOne.text,
    optionTwo: questions[qid].optionTwo.text,
  };
};
export default connect(mapStateToProps)(Poll);
