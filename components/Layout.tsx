import React from 'react';

import Head from 'next/head';

import Base from './Base';
import Footer from './Footer';
import Header from './Header';

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {

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
  );
};

export default Layout;
