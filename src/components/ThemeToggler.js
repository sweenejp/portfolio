import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggler(props) {
  return (
    <div
      name='themeIsLight'
      className='theme-toggler'
      onClick={props.handleClick}
    >
      <div
        className={
          props.themeIsLight
            ? 'theme-toggler__switch'
            : 'theme-toggler__switch theme-toggler__switch--on'
        }
      >
        {props.themeIsLight ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
}

export default ThemeToggler;
