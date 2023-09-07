import React from "react";
import { Link } from "react-router-dom";

const Header = ({ userId }) => {
  const logoStyle = {
    fontFamily: "'Concert One', cursive",
    fontSize: "2em",
    position: "relative",
    top: "0.2em",
    left: "0.3em",
    color: "#ffffff", // Change the color to your desired color
  };

  return (
    <>
      <nav className="navbar-expand-lg bg-success p-1">
        <ul className="d-flex justify-content-between list-unstyled">
          <li>
            <Link to={`/home/${userId}`} className="text-decoration-none" style={logoStyle}>
              FOODIE {/* Change the logo text */}
            </Link>
          </li>
          <li>
            <div className="mt-3 fs-5">
              <ul className="d-flex flex-row list-unstyled">
                <li className="">
                  <Link to={`/home/${userId}`} className="text-decoration-none m-3 text-white">
                    Veg
                  </Link>
                </li>
                <li>
                  <Link to={`/home/${userId}`} className="text-decoration-none m-3 text-white">
                    Non-Veg
                  </Link>
                </li>
                <li>
                  <Link to={`/profile/${userId}`} className="text-decoration-none m-3 text-white">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
