import { Component } from "react";
import { signOut } from "../services/user";

class SignOut extends Component {
  componentDidMount() {
    const { history, clearUser, user } = this.props;
    signOut(user)
      .then(() => clearUser())
      .finally(() => history.push("/sign-in"));
  }
  render() {
    return "";
  }
}

export default SignOut;
