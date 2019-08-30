import React, { FunctionComponent } from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

import styles from './Layout.scss';

interface Props {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => {

  return (
    <div className={'d-flex flex-column ' + styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header/>

      <main className={styles.main}>
        {children}
      </main>

      <Footer/>

      <style jsx={true} global={true}>{`
      html, body, #__next {
        height: 100%;
      }
      `}</style>
    </div>
  )
};

export default Layout;
