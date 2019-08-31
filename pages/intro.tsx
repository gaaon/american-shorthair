import React from 'react';

import {NextPage} from 'next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout';

const Intro: NextPage<{}> = () => (
  <Layout title={'Home'}>
    <Container>
      <Row>
        <h1>
          내 소개
        </h1>
      </Row>
    </Container>
  </Layout>
);

export default Intro;