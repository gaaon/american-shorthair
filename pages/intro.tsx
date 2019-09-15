import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Base from '../components/Base';
import UnderConstruction from '../components/UnderConstruction';

const Intro: NextPage<{}> = () => (
  <Base>
    <Head>
      <title> taawoo - 소개 </title>
    </Head>

    <Container className={'h-100'}>
      <Row className={'h-100 justify-content-center align-items-center'}>
        <UnderConstruction content={'소개 페이지 공사중'}/>
      </Row>
    </Container>
  </Base>
);

export default Intro;
