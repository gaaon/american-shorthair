import React, { FunctionComponent } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Website } from '../types';

import styles from './Footer.module.scss';

interface Props {

}

const Footer: FunctionComponent<Props> = () => {
  const websites: Array<Website> = [
    {name: 'Github', url: 'https://github.com/gaaon'},
    {name: 'Linkedin', url: 'https://www.linkedin.com/in/taewoo-kim-342020125'},
  ];

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Row>
          <Col xs={4}>
            <h2 className={'d-none'}> License </h2>
            Copyright © 2019 Taewoo Kim
          </Col>

          <Col xs={4}>
            <h2 className={'h5'}> Links </h2>
            <Row>
              {
                websites.map(website => (
                  <Col className={styles.website} key={website.name} xs={12}>
                    <a href={website.url} target={'__blank'}> {website.name} </a>
                  </Col>
                ))
              }
            </Row>
          </Col>

          <Col xs={4}>
            <h2 className={'h5'}> Contact </h2>
            <Row>
              <Col xs={12}>
                <a href={'mailto:xond4195@gmail.com'} target={'__blank'}> email </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
      `}
      </style>
    </footer>
  );
};

export default Footer;
