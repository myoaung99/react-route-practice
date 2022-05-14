import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h4 className={classes.logo}>Quote</h4>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/new-quote"
            >
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
