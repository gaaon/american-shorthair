import React, { FunctionComponent } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Footer.scss';

interface Props {

}

interface Website {
  name: string
  url: string
}

const Footer: FunctionComponent<Props> = () => {
  const websites: Array<Website> = [
    {name: 'Github', url: 'http://daum.net'},
    {name: 'Linkedin', url: 'http://daum.net'},
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
                    {website.name}
                  </Col>
                ))
              }
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
