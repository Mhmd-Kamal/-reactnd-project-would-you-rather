import React from "react";
import { connect } from "react-redux";
import PollStats from "./PollStats";
import Poll from "./Poll";

const ViewPoll = (props) => {
  const { answered, qid, error } = props;
  console.log(props);
  if (error) {
    return (
      <div className="error-page">
        <img src="../avatar/error-404.png" alt="error img" />
        <p>Error 404: the requested poll doesnot exist !!</p>
      </div>
    );
  }
  if (answered) {
    return <PollStats qid={qid} />;
  } else {
    return <Poll qid={qid} />;
  }
};

const mapStateToProps = ({ questions, users, authedUser }, { match }) => {
  const qid = match.params.qid;
  // console.log(match);
  if (!questions[qid]) {
    return {
      error: 404,
    };
  }
  return {
    qid,
    answered:
      questions[qid].optionOne.votes.includes(authedUser) ||
      questions[qid].optionTwo.votes.includes(authedUser),
  };
};
export default connect(mapStateToProps)(ViewPoll);
