import React, { useRef } from "react";
import "./switch.css";
function Switch({ setDarkMode, checked, setIsChecked }) {
  const ref = useRef(null);
  function handleChange() {
    setIsChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;
