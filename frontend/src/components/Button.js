import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const usercheck=localStorage.getItem('nickname');

  return (<Link to={usercheck?'/':'/login'}  className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={usercheck?undefined:(localStorage.removeItem('nickname'),localStorage.removeItem('uid'),localStorage.removeItem('jwt'))} 
        type={type}
      >{usercheck?'로그아웃':'로그인'}
      </button></Link>
   
  );
};