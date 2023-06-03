import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styles from './footer.module.css';

export const Footer = () => (
  <div className={styles.footerWrapper}>
    <Navbar collapseOnSelect expand="md" sticky="bottom" bg="dark" variant="dark">
      <Container className="justify-content-center">
        <div>All rights reserved 2023</div>
      </Container>
    </Navbar>
  </div>
);
