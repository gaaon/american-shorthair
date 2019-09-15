import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';

import {useLocalStore, useObserver} from 'mobx-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Base from '../components/Base';
import LeftMain from '../components/home/LeftMain';
import RightMain from '../components/home/RightMain';
import BackgroundMain from '../components/home/BackgroundMain';

import styles from './index.scss';
import {RootStore, useStore} from '../store';

const Home: NextPage = () => {
  const rootStore = useStore();

  const store = useLocalStore((source: RootStore) => ({
    isMoving: false,
    movingState: '',
    setting: source.setting,
    clickLink(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      e.preventDefault();

      if (store.isMoving) {
        return;
      }

      store.isMoving = true;

      const linkTo = e.currentTarget.getAttribute('href');
      if (linkTo !== null) {
        if (store.setting.isHomeAnimActive) {
          store.movingState = styles.moving;
          setTimeout(() => {
            Router.push(linkTo.toString());
          }, 1000);
        } else {
          Router.push(linkTo.toString());
        }
      }
    },
  }), rootStore);

  return useObserver(() => (
    <Base>
      <Head>
        <title>{'taawoo - home'}</title>
      </Head>

      <Container className={styles.main}>
        <Row className={'h-100 flex-column flex-sm-row'}>
          <LeftMain className={`${styles.left} ${store.movingState}`} />
          <RightMain className={`${styles.right} ${store.movingState}`}
                     isAnimActive={store.setting.isHomeAnimActive}
                     onClickLink={store.clickLink}
                     onClickTriggerAnim={store.setting.toggleAnimActive} />
        </Row>
      </Container>

      <BackgroundMain className={styles.backgroundMain} />
    </Base>
  ));
};

export default Home;
