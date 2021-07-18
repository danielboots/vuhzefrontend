import React, { Component } from "react";
import Buttons from "@/components/forms/Button";
import { signInWithGoogle } from "firebase/utils";

("./../firebase/utils");

class SignIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <div>
          Sign in Methods
          <Buttons
            onClick={signInWithGoogle}
            className="bg-indigo-700 text-white font-bold m-3 p-4"
          >
            Sign in with Google
          </Buttons>
        </div>
      </form>
    );
  }
}

export default SignIn;
