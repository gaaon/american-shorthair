import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LabLayout from '../../components/LabLayout';

import styles from './dayNightSwitch.scss';

const DayNightSwitch = () => (
  <LabLayout>
    <Container>
      <Row>
        <Col>
          <input type={'checkbox'} />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.dayNightSwitch} />
        </Col>
      </Row>
    </Container>
  </LabLayout>
);

export default DayNightSwitch;
