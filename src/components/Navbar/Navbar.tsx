import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTitle}> My E-Commerce-App</div>
      <div className={styles.navbarLinks}>
        <Link to="/" className={styles.navbarLink}>
          Home
        </Link>
        <Link to="/cart" className={styles.navbarLink}>
          Cart
        </Link>
        <Link to="/checkout" className={styles.navbarLink}>
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
