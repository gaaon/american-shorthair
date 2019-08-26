import React from 'react';

import { NextPage } from "next";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout';

import styles from './index.scss';

const Home: NextPage<{}> = () => (
  <Layout title={'Home'}>
    <Container className={styles.main}>
      <Row>
        <h1>
          hello world
        </h1>
      </Row>
    </Container>
  </Layout>
);

export default Home
