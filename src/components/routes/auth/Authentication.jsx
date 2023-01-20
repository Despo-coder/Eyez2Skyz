import Signup from './sign-up/Signup';
import SignIn from './sign-in/SignIn';
import '../auth/authentication.scss';
const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <Signup />
    </div>
  );
};
export default Authentication;
