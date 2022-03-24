import { FC, useState } from 'react';
import { FirebaseError } from 'firebase/app';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
  createUserDocument,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../firebase/firebase.utils';

import './sign-in.style.scss';

export interface SignInState {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const [ state, setState ] = useState<SignInState>({
    email: '',
    password: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = state;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      setState({ email: '', password: '' });
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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
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
          <CustomButton onClick={logGoogleUser} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
