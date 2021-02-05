import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSentMessages } from "../../actions/messageActions";
import MessageItem from "./MessageItem";

class SentMessages extends Component {
  componentDidMount() {
    this.props.getSentMessages();
  }
  render() {
    const { sentMessages } = this.props.message;
    return (
      <div className="sentMessages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Sent Messages</h1>
              <br />
              <br />
              <hr />
              {sentMessages.map((message) => (
                <MessageItem key={message.id} message={message} type="sent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SentMessages.propTypes = {
  message: PropTypes.object.isRequired,
  getSentMessages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, { getSentMessages })(SentMessages);
