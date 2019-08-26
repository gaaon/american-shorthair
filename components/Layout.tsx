import React, { FunctionComponent } from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

import styles from './Layout.scss';

interface Props {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <div className={'d-flex flex-column ' + styles.layout}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <title>{title}</title>

      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
    </Head>

    <Header />

    <main className={styles.main}>
      {children}
    </main>

    <Footer />

    <style jsx={true} global={true}>{`
    html, body, #__next {
      height: 100%;
    }
    `}</style>
  </div>
);

export default Layout;
