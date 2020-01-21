import React, { Component } from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util'
import "./sign-in.styles.scss";
export default class SignInComponent extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({ [name]:value });
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            required 
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="Password"
            onChange={this.handleChange}

          />

          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>

        </form>
      </div>
    );
  }
}
