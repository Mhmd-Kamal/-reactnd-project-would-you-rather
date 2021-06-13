import React, { Component } from "react";

import picture from "../utils/avatar/user.png";

export default class QuestionPreview extends Component {
  render() {
    return (
      <div className="poll-preview">
        <div className="poll-header">Sarah Edo asked:</div>
        <div className="poll-content">
          <div className="avatar">
            <img className="avatar-img" src={picture} alt="profile avatar" />
          </div>
          <div className="poll-details">
            <h3>Would you rather:</h3>
            <p>...option A ...</p>
            <button className="btn btn-outline-primary btn-lg btn-block">
              View Poll
            </button>
          </div>
        </div>

        {/* <Container>
          <Row className="border">Sarah Edo asked:</Row>
          <Row>
            <Col className="border avatar" xs={4}>
              <Image className="avatar-img " src={picture} roundedCircle />
            </Col>
            <Col className="border">
              <p>Would you rather:</p>
              <p>...option A ...</p>
              <Button className="view-button btn btn-outline">View Poll</Button>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}
