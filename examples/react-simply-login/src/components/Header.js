import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// context
import { Context } from '../store';

// service
import { userService } from '../services';

const Header = () => {
  const [state, dispatch] = useContext(Context);
  const { isAuth } = state;
  const login = () => {
    dispatch({ type: 'LOGIN_REQUEST' });
    userService.login().then(
      data => {
        dispatch({ type: 'LOGIN_SUCCESS'});
      },
      error => {
        dispatch({ type: 'LOGIN_FAILURE' });
      }
    )
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT_REQUEST' });
    userService.logout().then(
      data => {
        dispatch({ type: 'LOGOUT_SUCCESS'});
      },
      error => {
        dispatch({ type: 'LOGOUT_FAILURE' });
      }
    )
  };

  return (
    <div className='h-20 bg-red-600 w-full shadow-2xl flex items-center justify-end'>
      {
        !isAuth ? <button className='text-xl mr-6 font-semibold focus:outline-none' onClick={login} data-testid='login-button'>登入</button> :
        <button className='text-xl mr-6 font-semibold focus:outline-none' onClick={logout} data-testid='logout-button'>登出</button>
      }
    </div>
  )
};

Header.propTypes = {};

export default Header;