import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './LeftMain.scss';

const MainTitle = () => (
  <React.Fragment>
    <small className={'text-white'}>모든 코드에 대한</small> <br/>
    taawoo의 페이지
  </React.Fragment>
);

const LeftMain: React.FC<{className?: string}> = ({className}) => (
  <Col className={className}>
    <Row className={'h-100 flex-column justify-content-end justify-content-sm-center'}>
      <Col className={'text-right flex-grow-0'}>
        <Row className={'justify-content-end'}>
          <Col>
            <img className={styles.avatar} src={'/static/img/my_photo.jpeg'} alt={'my photo'} />
          </Col>
        </Row>
        <h1 className={'display-4 d-none d-lg-block'}> <MainTitle/> </h1>
        <p className={'h2 d-block d-lg-none'}> <MainTitle/> </p>
      </Col>
    </Row>
  </Col>
);

export default LeftMain;
