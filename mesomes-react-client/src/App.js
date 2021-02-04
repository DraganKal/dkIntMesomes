import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import jwt_decode from "jwt-decode";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <switch></switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
