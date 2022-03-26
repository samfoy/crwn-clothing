import { FC, useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocument
} from '../../firebase/firebase.utils';

import './sign-up.style.scss';
import { FirebaseError } from 'firebase/app';

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp: FC = () => {
  const [ state, setState ] = useState<SignUpState>(defaultState);
  const { displayName, email, password, confirmPassword } = state;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords must match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setState(() => defaultState);
    } catch (err) {
      if (
        err instanceof FirebaseError &&
        err.code === 'auth/email-already-in-use'
      ) {
        alert('Cannot create user, email already in use');
      }
      else {
        console.error('User creation error', err);
      }
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
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and passwrod</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
