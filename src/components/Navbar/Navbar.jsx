import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.Navbar__container}>
      <NavLink className={styles.letter_navbar} to="/">Home</NavLink>
      <NavLink className={styles.letter_navbar} to="/about">About</NavLink>
    </div>
  );
}

export default Navbar;
