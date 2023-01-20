import { useState } from 'react';
import Formpage from '../formpage/Formpage';
import Button from '../../../button/Button';
import './signin.scss';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log(user.displayName);
  };

  const handleEmailPaswsordLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(`${error}`);
          break;
        case 'auth/user-notfound':
          alert(`${error}`);
          break;
        default:
          alert(`${error}`);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleEmailPaswsordLogin}>
        {/* Using an object method instead of spread operator */}
        {/* <Formpage
          label='Display Name'
          insertOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'displayName',
            value: displayName,
          }}
        /> */}

        <Formpage
          label='email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <Formpage
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit' buttonType='inverted'>
            Sign In
          </Button>
          <Button type='button' onClick={SignInWithGoogle} buttonType='google'>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
