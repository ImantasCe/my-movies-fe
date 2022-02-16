import React from 'react';
import { ReactNode } from 'react';

import styles from './MainLayout.module.css';

type LayoutProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const MainLayout = ({ header, children, footer }: LayoutProps): JSX.Element => (
  <>
    {header}
    <main className={styles.children}>{children}</main>
    <footer className={styles.footer}>{footer}</footer>
  </>
);

export default MainLayout;
