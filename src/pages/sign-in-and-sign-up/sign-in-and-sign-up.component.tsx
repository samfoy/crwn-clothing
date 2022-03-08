import { FC } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.style.scss';

const SignInAndSignUpPage: FC = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
