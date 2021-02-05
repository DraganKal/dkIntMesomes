import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/messageActions";
import classnames from "classnames";

class SendMessage extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      recipientUsername: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMessage = {
      text: this.state.text,
      recipientUsername: this.state.recipientUsername,
    };

    this.props.sendMessage(newMessage, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container contact">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="image"
                />
                <h2>Send a Message</h2>
                <h4>They would love to hear you !</h4>
              </div>
            </div>
            <div className="col-md-9">
              <form onSubmit={this.onSubmit}>
                <div className="contact-form">
                  <div className="form-group">
                    <label className="control-label col-sm-2" for="fname">
                      Send to:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.recipientUsername,
                        })}
                        id="fname"
                        placeholder="Enter User Email"
                        name="recipientUsername"
                        value={this.state.recipientUsername}
                        onChange={this.onChange}
                      />
                      {errors.recipientUsername && (
                        <div className="invalid-feedback">
                          {errors.recipientUsername}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="control-label col-sm-2" for="comment">
                        Text:
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          className={classnames("form-control", {
                            "is-invalid": errors.text,
                          })}
                          rows="5"
                          id="comment"
                          name="text"
                          value={this.state.text}
                          onChange={this.onChange}
                        ></textarea>
                        {errors.text && (
                          <div className="invalid-feedback">{errors.text}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SendMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { sendMessage })(SendMessage);
