import { FC, useState } from 'react';
import { FirebaseError } from 'firebase/app';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../firebase/firebase.utils';

import './sign-in.style.scss';

interface SignInState {
  email: string;
  password: string;
}

const defaultState: SignInState = {
  email: '',
  password: ''
};

const SignIn: FC = () => {
  const [ state, setState ] = useState(defaultState);
  const { email, password } = state;

  const resetFormFields = () => {
    setState(defaultState);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            break;
        }
      }
      console.error(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setState(st => ({
      ...st,
      [name]: value
    }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={state.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={state.password}
          required
          handleChange={handleChange}
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
};

export default SignIn;
