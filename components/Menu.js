import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <header className={styles.Menu}>
      <a href="/">Gantan</a>
      <nav>
        <ul>
          <li className={styles.MenuItem}>
            <a href="/" className={styles.MenuLink}>
              Reflexologie
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a href="/" className={styles.MenuLink}>
              Massage
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a href="/" className={styles.MenuLink}>
              Physioscan
            </a>
          </li>
          <li className={styles.MenuItem}>
            <a href="/" className={styles.MenuLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
