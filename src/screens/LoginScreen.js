import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Input } from "semantic-ui-react";
import { history } from "../helpers/history.js";


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "", 
        usernameError: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    if (!username) {
      this.setState({ usernameError: "Please enter username" });
    } else {
      this.setState({usernameError: "" });
      history.push("/home");
      localStorage.setItem("username", username);
    }
  }

  render() {
    const { username, 
            usernameError } = this.state;
    return (
      <div className="main">
        <div class="login" style={{flexDirection: "column", color:"red"}}>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Enter player name"/>
            {usernameError &&
                <div
                    className={"ui error message"}
                    style={{ flexDirection: "column" }}
                > {usernameError}
                </div>
            }
            <button 
                class="ui button primary" 
                style={{marginTop: 40}}
                onClick={this.handleSubmit}
                >
                START PLAYING
            </button>
        </div>
      </div>
    );
  }
}

export { LoginScreen };
