import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionPreview extends Component {
  render() {
    const { author, avatar, text } = this.props;

    return (
      <div className="poll-preview">
        <div className="poll-header">{`${author} asked:`}</div>
        <div className="poll-content">
          <div className="avatar">
            <img className="avatar-img" src={avatar} alt="profile avatar" />
          </div>
          <div className="poll-details">
            <h3>Would you rather:</h3>
            <p>{text}</p>
            <button className="btn btn-outline-primary btn-lg btn-block">
              View Poll
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }, { id }) => ({
  author: users[questions[id].author].name,
  avatar: users[questions[id].author].avatarURL,
  text: "... " + questions[id].optionOne.text.slice(0, 10) + " ...",
});
export default connect(mapStateToProps)(QuestionPreview);
