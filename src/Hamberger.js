import React, { useState } from "react";
import "./Hamberger.css";
function Hamberger() {
  const [state, setState] = useState("none");
  const handleClick = () => {
    setState(state == "block" ? "none" : "block");
  };
  return (
    <div className="hamberger">
      <svg
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <div className="hambergerDropdown" style={{ display: state }}>
        <ul>
          <li>
            <a>Menu 1</a>
          </li>
          <li>
            <a>Menu 2</a>
          </li>
          <li>
            <a>Menu 3</a>
          </li>
          <li>
            <a>Menu 4</a>
          </li>
          <li>
            <a>Menu 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hamberger;
