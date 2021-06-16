import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authedUser";
import { Link } from "react-router-dom";

class NavBar extends Component {
  handleClick = (e) => {
    this.props.dispatch(logout());
  };
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img src="./avatar/compare.png" alt="brand-img" />
        </Link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/new">
                New Question
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link " to="/leaderBoard">
                Leader Board
              </Link>
            </li>
          </ul>

          <div class="navbar-text">
            <p>Hello, Sarah Edo</p>
            <img className="avatar-img" src="./avatar/user.png" />
          </div>
          <button
            onClick={this.handleClick}
            class="btn btn-outline-success my-2 my-sm-0 logout"
            type="submit"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);
