import React from 'react'

import {NextPage} from "next";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout';

const Home: NextPage<{}> = () => (
  <Layout title={'Home'}>
    <Container>
      <Row>
        <h1>
          hello world
        </h1>
      </Row>
    </Container>
  </Layout>
);

export default Home