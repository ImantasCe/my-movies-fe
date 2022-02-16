import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = {
  isActive: boolean;
  onClick?: () => void;
};

const HamburgerButton = ({ isActive, onClick }: HamburgerButtonProps): JSX.Element => {
  return (
    <div className={isActive ? parseMultipleClassNames([styles.hamburger, styles.active]) : styles.hamburger} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;
