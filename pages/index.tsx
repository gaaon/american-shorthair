import React from 'react';

import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Router from 'next/router';

import {useLocalStore, useObserver} from 'mobx-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Cookies from 'js-cookie';
import cookie from 'cookie';

import Base from '../components/Base';
import LeftMain from '../components/home/LeftMain';
import RightMain from '../components/home/RightMain';
import BackgroundMain from '../components/home/BackgroundMain';

import styles from './index.scss';

interface Props {
  isHomeAnimActive: string;
}

const Home: NextPage<Props> = ({ isHomeAnimActive }) => {
  const store = useLocalStore(() => ({
    isMoving: false,
    isAnimActive: isHomeAnimActive === 'true',
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
                     onClickTriggerAnim={store.toggleAnimActive} />
        </Row>
      </Container>

      <BackgroundMain className={styles.backgroundMain} />
    </Base>
  ));
};

Home.getInitialProps = async (ctx: NextPageContext) => {
  let isHomeAnimActive: string | undefined;

  if (ctx.req) {
    const headers = ctx.req.headers;
    const ctxCookie = cookie.parse(headers.cookie || '');
    isHomeAnimActive = ctxCookie['isHomeAnimActive'];
  } else {
    isHomeAnimActive = Cookies.get('isHomeAnimActive');
  }

  return {
    isHomeAnimActive: (isHomeAnimActive === undefined || isHomeAnimActive) + '',
  };
};

export default Home;
