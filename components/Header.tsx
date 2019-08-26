import React, {FunctionComponent} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface Props {

}

const Header: FunctionComponent<Props> = () => (
  <header>
    <Container>
      <Row>
        Taweoo's Page
      </Row>
    </Container>
  </header>
);

export default Header;
