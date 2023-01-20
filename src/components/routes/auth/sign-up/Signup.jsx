import { useState } from 'react';
import Formpage from '../formpage/Formpage';
import Button from '../../../button/Button';
import './signup.scss';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleEmailPaswsordLogin = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords DO not Match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      //Reset the input fields to blank
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert(`${error}`);
      } else {
        alert(`User Creation enountered and Error :${error}`);
      }
      console.log(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Dont have an account ?</h2>
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
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <Formpage
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};
export default Signup;
