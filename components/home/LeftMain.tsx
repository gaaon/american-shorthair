import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LeftMain: React.FC<{className?: string}> = ({className}) => (
  <Col className={className}>
    <Row className={'h-100 flex-column justify-content-center'}>
      <Col className={'text-right flex-grow-0'}>
        <h1 className={'display-4'}>
          <small className={'text-white'}>모든 코드에 대한</small> <br/>
          taawoo의 페이지
        </h1>
      </Col>
    </Row>
  </Col>
);

export default LeftMain;
