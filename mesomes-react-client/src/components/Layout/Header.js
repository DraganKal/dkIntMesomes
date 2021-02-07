import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/SecurityActions";
import Logo from "../../images/Logo.png";

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }
  render() {
    const { validToken, user } = this.props.security;
    // const userState = this.state.user;

    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto topnav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newMessage">
              Send a New Message
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/received">
              Received Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sent">
              Sent Messages
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Archived Messages
            </a>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link btn btn-danger text-white"
              type="button"
              to="/logout"
              data-toggle="modal"
              data-target="#myModal"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto topnav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn btn-primary text-white"
              type="button"
              to="/login"
              data-toggle="modal"
              data-target="#myModal"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn btn-danger text-white"
              type="button"
              to="/register"
              data-toggle="modal"
              data-target="#myModal"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    );

    let headerLinks;

    if (validToken && user && user.roles === "SENT") {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link className="navbar-brand" to="/">
          <img src={Logo} height="50px" width="50px" alt="MESOMES" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {headerLinks}
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
