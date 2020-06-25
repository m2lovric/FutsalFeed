import React from 'react';
import './Header.scss';

const Header = () => {
  return(
    <header className="header">
      <nav className="header__nav nav">
        <section className="nav__logo"></section>
        <section className="nav__pages"></section>
        <section className="nav__search"></section>
        <section className="nav__social"></section>
        <section className="nav__btn"></section>
      </nav>
    </header>
  )
}

export default Header;