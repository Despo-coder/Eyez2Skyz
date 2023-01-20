import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.scss';

import eyesLogo from '../../../img/E2S reconstructed.png';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>
            <img
              src={eyesLogo}
              alt='Eyes to The Skies'
              width='100px'
              height='80px'
            />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/shop'>
            CONTACT
          </Link>
          <Link className='nav-link' to='/auth'>
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
