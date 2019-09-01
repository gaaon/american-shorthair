import React, {FunctionComponent} from 'react';
import Head from 'next-server/dist/lib/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Base from './Base';
import {LinkItem} from '../types';

const LabLayout: FunctionComponent<{}> = ({children}) => {
  const linkItems: Array<LinkItem> = [
    {link: '/laboratory/dayNightSwitch', label: '낮밤스위치'},
  ];

  return (
    <Base>
      <Head>
        <title>Taawoo - 실험실</title>
      </Head>

      <Container>
        <Row>
          <Col>
            <h2 className={'text-center mt-5'}>리액트 실험실</h2>
          </Col>
        </Row>
        <Nav className="justify-content-center" activeKey="/home">
          {linkItems.map((linkItem, idx) => (
            <Nav.Item key={idx}>
              <Link href={linkItem.link} passHref={true}>
                <Nav.Link as={'a'}>{linkItem.label}</Nav.Link>
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>

      <main className={'w-100'}>
        {children}
      </main>
    </Base>
  );
};

export default LabLayout;