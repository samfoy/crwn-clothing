import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

export interface SignInState {
  email: string;
  password: string;
}

class SignIn extends Component<{}, SignInState> {
  state: SignInState = {
    email: '',
    password: ''
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    this.setState(st => ({
      ...st,
      [name]: value
    }));
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
