import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class PollPreview extends Component {
  render() {
    const { author, avatar, text, qid } = this.props;

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
            <Link className="link" to={`/questions/${qid}`}>
              <button className="btn  btn-lg btn-block">View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }, { qid }) => ({
  qid,
  author: users[questions[qid].author].name,
  avatar: users[questions[qid].author].avatarURL,
  text: "... " + questions[qid].optionOne.text.slice(0, 10) + " ...",
});
export default connect(mapStateToProps)(PollPreview);
