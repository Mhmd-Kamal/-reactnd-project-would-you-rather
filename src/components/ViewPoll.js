import React from "react";
import { connect } from "react-redux";
import PollStats from "./PollStats";
import Poll from "./Poll";

const ViewPoll = (props) => {
  const { answered, qid } = props;
  console.log(props);
  if (answered) {
    return <PollStats qid={qid} />;
  } else {
    return <Poll qid={qid} />;
  }
};

const mapStateToProps = ({ questions, users, authedUser }, { match }) => {
  const qid = match.params.qid;
  console.log(match);
  return {
    qid,
    answered:
      questions[qid].optionOne.votes.includes(authedUser) ||
      questions[qid].optionTwo.votes.includes(authedUser),
  };
};
export default connect(mapStateToProps)(ViewPoll);
