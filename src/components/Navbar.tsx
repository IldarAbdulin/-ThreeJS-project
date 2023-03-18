import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = React.useState<string>('');
  const [toggle, setToggle] = React.useState<boolean>(false);
  const onScrollToTop = () => {
    setActive('');
    window.scrollTo(0, 0);
  };
  return (
    <nav className={`${styles.paddingX} navbar`}>
      <div className="navbar__main">
        <Link to={`/`} className="main__link" onClick={onScrollToTop}>
          <img src={logo} alt="logo" />
          <p>
            Ildar &nbsp;<span> | Abdulin</span>
          </p>
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobileV">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} menu`}>
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
