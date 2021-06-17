import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { setAuthedUser } from "../actions/authedUser";

class LogIn extends Component {
  state = {
    authedUser: "",
    isAuthenticated: false,
  };

  handleClick = (e) => {
    this.setState({
      authedUser: e.target.id,
    });
  };

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.authedUser));
    if (this.state.authedUser !== "") {
      this.setState({ isAuthenticated: true });
    }
  };
  render() {
    const { users } = this.props;
    const { isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login">
        <div className="title">
          <img src="./avatar/compare.png" alt="logo" />
          <h2>Welcome to the Would You Rather App!</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className="accounts">
          {Object.keys(users).map((uid) => {
            const { id, name, avatarURL } = users[uid];

            return (
              <div
                key={id}
                className={`account + ${
                  this.state.authedUser === id && "selected"
                }`}
              >
                <img
                  id={id}
                  className="avatar-img"
                  src={avatarURL}
                  alt="profile avatar"
                  onClick={this.handleClick}
                />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
        <div className="submit">
          <button onClick={this.handleSubmit} className="btn  btn-lg btn-block">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LogIn);
