import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getReceivedMessages } from "../../actions/messageActions";
import MessageItem from "./MessageItem";

class ReceivedMessages extends Component {
  componentDidMount() {
    this.props.getReceivedMessages();
  }

  render() {
    const { receivedMessages } = this.props.message;
    return (
      <div className="receivedMessages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Received Messages</h1>
              <br />
              <br />
              <hr />
              {receivedMessages.map((message) => (
                <MessageItem
                  key={message.id}
                  message={message}
                  type="received"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReceivedMessages.propTypes = {
  message: PropTypes.object.isRequired,
  getReceivedMessages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, { getReceivedMessages })(
  ReceivedMessages
);
