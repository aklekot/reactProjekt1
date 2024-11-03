import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'; 

const NavBar = () => (
  <nav className={styles.navBar}>
    <button className={styles.hamburgerButton}>
    <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </button>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/favorite">Favorite</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default NavBar;