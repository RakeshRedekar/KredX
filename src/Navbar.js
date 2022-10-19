import React from "react";
import Hamberger from "./Hamberger";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navPosition">
      <div className="NavMainDiv">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            KredX
          </a>
          <div className="navRight">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Menu 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu 2
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu 3
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu 4
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Menu 5
                </a>
              </li>
            </ul>
          </div>
          <div className="navHamberger">
            <Hamberger />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
