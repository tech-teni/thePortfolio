import React, { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
// import { BsSlashLg } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
import {
  MdWork,
  MdMore,
  MdPermContactCalendar,
  MdCancel,
} from "react-icons/md";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const checkMobile = () => {
    setMobile(!mobile);
  };

  return (
    <header>
      <nav id="navbar">
        <div>
          <p className="logo-holder">
            <div className="logo">
              <FaLessThan />

              <span> Tech-teni </span>

              <FaGreaterThan />
            </div>
          </p>
        </div>
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <span className="mobile" onClick={checkMobile}>
          {mobile ? <MdCancel /> : <AiOutlineMenu />}
        </span>
      </nav>
      {mobile && (
        <div className="mobile-menu">
          <ul>
            <li>
              <i>
                {" "}
                <MdWork />{" "}
              </i>

              <a href="#work">Work</a>
            </li>
            <li>
              <i>
                {" "}
                <MdMore />
              </i>

              <a href="#about">About</a>
            </li>
            <li>
              <i>
                {" "}
                <MdPermContactCalendar />
              </i>

              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
