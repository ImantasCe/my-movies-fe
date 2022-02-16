import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      &copy;
      <a className={styles.footerLink} href="http://www.linkedin.com/in/imantas-cesliavicius" rel="noopener noreferrer" target="_blank">
        &#160;Imantas Cesliavicius
      </a>
    </footer>
  );
};

export default Footer;
