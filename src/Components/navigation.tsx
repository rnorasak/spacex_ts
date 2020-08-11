import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Spacex
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <Link className="nav-link" to="/">
              Next Launch <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pastLaunches">
              Past Launches
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/rockets">
              Rockets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/launchPads">
              Launch Pads
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link " to="/landPads">
              Land Pads
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/favorites">
              Favorites
            </Link>
          </li>  */}
          {/* <li className="nav-item">
            <Link className="nav-link " to="/aboutUs">
              About Us
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
