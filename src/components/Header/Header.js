import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">
            Referrals app
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create" className="nav-link">
                  New Referral
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/play" className="nav-link">
                  Tic Tac Toe
                </NavLink>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
