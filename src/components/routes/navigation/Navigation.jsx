import { Outlet, Link } from 'react-router-dom';
import './navigation.scss';

import eyesLogo from '../../../img/E2S reconstructed.png';
import { Fragment } from 'react';
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
