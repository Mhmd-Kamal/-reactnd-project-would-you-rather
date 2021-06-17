import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authedUser";
import { Link } from "react-router-dom";

class NavBar extends Component {
  handleClick = (e) => {
    this.props.dispatch(logout());
  };
  render() {
    const { authedUser } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src="./avatar/compare.png" alt="brand-img" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                New Question
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/leaderboard">
                Leader Board
              </Link>
            </li>
          </ul>

          {authedUser !== undefined && (
            <Fragment>
              <div className="navbar-text">
                <p>Hello, {authedUser.name}</p>
                <img
                  className="avatar-img"
                  src={authedUser.avatarURL}
                  alt="avatar img"
                />
              </div>
              <button
                onClick={this.handleClick}
                className="btn btn-outline-success my-2 my-sm-0 logout"
                type="submit"
              >
                Logout
              </button>
            </Fragment>
          )}
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: users[authedUser],
  };
}
export default connect(mapStateToProps)(NavBar);
