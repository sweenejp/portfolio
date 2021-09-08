import React from "react";

function ThemeToggler(props) {
  return (
    <div
      name="themeIsLight"
      className="theme-toggler"
      onClick={props.handleClick}
    >
      <div
        className={
          props.themeIsLight
            ? "theme-toggler__switch"
            : "theme-toggler__switch theme-toggler__switch--on"
        }
      ></div>
    </div>
  );
}

export default ThemeToggler;
