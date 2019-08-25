import React, { FunctionComponent } from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

interface Props {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <title>{title}</title>

      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
    </Head>

    <Header />

    {children}

    <Footer />
  </div>
);

export default Layout;
