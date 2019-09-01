import React, { FunctionComponent } from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';
import Base from './Base';

interface Props {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => {

  return (
    <Base>
      <Head>
        <title>{title}</title>
      </Head>

      <Header/>

      <main className={'flex-grow-1'}>
        {children}
      </main>

      <Footer/>
    </Base>
  )
};

export default Layout;
