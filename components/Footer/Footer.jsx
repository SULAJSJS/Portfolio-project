import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import classes from './footer.module.css';
import Link from 'next/link';

const NAV__LINK = [
  {
    path: '/',
    display: 'Главная',
  },
  {
    path: '#about',
    display: 'Обо мне',
  },
  {
    path: '#services',
    display: 'Навыки',
  },
  {
    path: '#portfolio',
    display: 'Портфолио',
  },
  {
    path: '#contact',
    display: 'Связь',
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}></div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; Copyright {year} - Developed by Osmonov Sultanbek. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
