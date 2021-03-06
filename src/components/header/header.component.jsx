import React from "react";
import { Link } from "react-router-dom";

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-holder">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <Link to="/">
        <h1>FILMSTA</h1>
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/explore">
        EXPLORE
      </Link>
      <Link className="option" to="/blog">
        BLOG
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
      } 
    </div>
  </div>
);

export default Header;
