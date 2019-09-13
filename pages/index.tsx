import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';

import {useLocalStore, useObserver} from 'mobx-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Cookies from 'js-cookie';

import Base from '../components/Base';
import LeftMain from '../components/home/LeftMain';
import RightMain from '../components/home/RightMain';
import BackgroundMain from '../components/home/BackgroundMain';

import styles from './index.scss';

const Home: NextPage<{}> = () => {
  const store = useLocalStore(() => ({
    isMoving: false,
    isAnimActive: (() => {
      const isHomeAnimActive = Cookies.get('isHomeAnimActive');
      return isHomeAnimActive === undefined || isHomeAnimActive === 'true';
    })(),
    movingState: '',
    toggleAnimActive() {
      store.isAnimActive = !store.isAnimActive;
      Cookies.set('isHomeAnimActive', (store.isAnimActive) + '');
    },
    clickLink(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      e.preventDefault();

      if (store.isMoving) {
        return;
      }

      store.isMoving = true;

      const linkTo = e.currentTarget.getAttribute('href');
      if (linkTo !== null) {
        if (store.isAnimActive) {
          store.movingState = styles.moving;
          setTimeout(() => {
            Router.push(linkTo.toString());
          }, 1000);
        } else {
          Router.push(linkTo.toString());
        }
      }
    },
  }));

  function a() {
    store.isAnimActive = !store.isAnimActive;
    Cookies.set('isHomeAnimActive', (store.isAnimActive) + '');
  }

  return useObserver(() => (
    <Base>
      <Head>
        <title>{'taawoo - home'}</title>
      </Head>

      <Container className={styles.main}>
        <Row className={'h-100'}>
          <LeftMain className={`${styles.left} ${store.movingState}`} />
          <RightMain className={`${styles.right} ${store.movingState}`}
                     isAnimActive={store.isAnimActive}
                     onClickLink={store.clickLink}
                     onClickTriggerAnim={a} />
        </Row>
      </Container>

      <BackgroundMain className={styles.backgroundMain} />
    </Base>
  ));
};

export default Home;
