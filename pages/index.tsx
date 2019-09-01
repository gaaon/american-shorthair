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
        <div>
          <h1 className={'mt-5'}>
            여기는
          </h1>

          <p>
            여기는 제 소개와 글도 쓰고 테스트를 하는 공간이에요.
          </p>
        </div>
      </Row>
    </Container>
  </Layout>
);

export default Home
