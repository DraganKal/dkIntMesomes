import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/SetJWTToken";
import Landing from "./components/Layout/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/userManagement/Register";
import Login from "./components/userManagement/Login";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/SecurityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import ReceivedMessages from "./components/messages/ReceivedMessages";
import SentMessages from "./components/messages/SentMessages";
import SendMessage from "./components/messages/SendMessage";

const jwtToken = localStorage.jwtToken;
if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });
  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public ROutes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
            <Switch>
              <SecuredRoute
                exact
                path="/received"
                component={ReceivedMessages}
              />
              <SecuredRoute exact path="/sent" component={SentMessages} />
              <SecuredRoute exact path="/newMessage" component={SendMessage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
