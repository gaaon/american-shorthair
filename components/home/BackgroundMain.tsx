import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  className?: string;
}

const BackgroundMain: React.FC<Props> = ({className}) => (
  <div className={className}>
    <Container className={'h-100'}>
      <Row className={'h-100 flex-column justify-content-center'}>
        <Col className={'flex-grow-0'}>
          <h2 className={'display-2 text-center'}>좋아요 갑시다!</h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BackgroundMain;