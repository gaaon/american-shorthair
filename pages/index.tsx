import React, { useState } from 'react';
import { NextPage } from "next";
import Head from 'next/head';
import Router from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Base from '../components/Base';
import LeftMain from '../components/home/LeftMain';
import RightMain from '../components/home/RightMain';

import styles from './index.scss';

const Home: NextPage<{}> = () => {
  const [isMoving, setMoving] = useState(false);

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (isMoving) {
      return;
    }

    setMoving(true);

    const linkTo = e.currentTarget.getAttribute('href');
    if (linkTo !== null) {
      setTimeout(() => {
        Router.push(linkTo.toString());
      }, 1000);
    }
  };

  const isMovingState = isMoving ? styles.moving : '';

  return (
    <Base>
      <Head>
        <title>{'taawoo'}</title>
      </Head>
      <Container className={styles.main}>
        <Row className={'h-100'}>
          <LeftMain className={`${styles.left} ${isMovingState}`} />
          <RightMain className={`${styles.right} ${isMovingState}`} onClickLink={handleClickLink} />
        </Row>
      </Container>

      <div className={styles.backgroundMain}>
        <Container className={'h-100'}>
          <Row className={'h-100 flex-column justify-content-center'}>
            <Col className={'flex-grow-0'}>
              <h2 className={'display-2 text-center'}>갑시다!</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  )
};

export default Home;
