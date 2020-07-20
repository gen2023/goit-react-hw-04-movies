import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routes.homePage}
        className="nav_link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink to={routes.movies} className="nav_link" activeClassName="active">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
