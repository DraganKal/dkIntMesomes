import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MessageItem extends Component {
  render() {
    const { message, type } = this.props;

    const typeIsReceived = (
      <div className="card-body">
        <h5 className="card-title">{message.senderUsername}</h5>

        <p className="card-text">{message.text}</p>
        <a href="#" className="btn btn-primary">
          Reply
        </a>
        <a href="#" className="btn btn-success">
          Archive
        </a>
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    );

    const typeIsSent = (
      <div className="card-body">
        <h5 className="card-title">{message.recipientUsername}</h5>

        <p className="card-text">{message.text}</p>

        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    );

    let messageButtons;

    if (type === "received") {
      messageButtons = typeIsReceived;
    } else {
      messageButtons = typeIsSent;
    }
    return (
      <div className="containter">
        <div className="card">
          <div className="card-header">{message.created_At}</div>
          {messageButtons}
        </div>
        <br />
      </div>
    );
  }
}

export default MessageItem;
