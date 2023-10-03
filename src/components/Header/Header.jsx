import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import menu from '../../assets/hamburgerMenu.svg';

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="header__bg">
        <Link to={''} className="header__logo">
          <img src={logo} alt="" />
        </Link>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={''}>Home</Link>
            </li>
            <li className="nav__item">
              <Link to={'/signup'}>Signup</Link>
            </li>
            <li className="nav__item ">
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
        <img
          className="header__menu"
          src={menu}
          alt="menu icon"
          onClick={() => setIsActive((isActive) => !isActive)}
        />
        <nav className={`nav--mobile ${isActive ? 'activated' : ''}`}>
          <ul className="nav__list nav--column">
            <li
              className="nav__item nav__item--modified"
              onClick={() => setIsActive((isActive) => !isActive)}
            >
              <Link to={''}>Home</Link>
            </li>
            <li
              className="nav__item nav__item--modified"
              onClick={() => setIsActive((isActive) => !isActive)}
            >
              <Link to={'/signup'}>Signup</Link>
            </li>
            <li
              className="nav__item nav__item--modified"
              onClick={() => setIsActive((isActive) => !isActive)}
            >
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
