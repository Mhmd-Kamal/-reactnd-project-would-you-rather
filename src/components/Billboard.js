import React, { Component } from "react";
import { connect } from "react-redux";

import UserCard from "./UserCard";

class Billboard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((uid) => (
          <UserCard key={uid} uid={uid} />
        ))}
      </div>
    );
  }
}

function totalScore(user) {
  const answersCount = Object.keys(user.answers).length;
  const questionsCount = Object.keys(user.questions).length;
  return answersCount + questionsCount;
}
const mapStateToProps = ({ users }) => ({
  users: Object.keys(users).sort(
    (a, b) => totalScore(users[b]) - totalScore(users[a])
  ),
});

export default connect(mapStateToProps)(Billboard);
