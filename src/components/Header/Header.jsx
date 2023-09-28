import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={''}>Home</Link>
          </li>
          <li className="nav__item">
            <Link to={'/signup'}>Signup</Link>
          </li>
          <li className="nav__item">
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
