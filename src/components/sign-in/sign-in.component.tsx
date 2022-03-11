import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
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

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
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
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
