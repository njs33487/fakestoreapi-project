import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        @ 2024 My E-Commerce-App. Nichoals Stanley{" "}
      </p>
    </footer>
  );
};

export default Footer;
