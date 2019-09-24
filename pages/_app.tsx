import React from 'react';

import App, { AppContext } from 'next/app';
import Router from 'next/router';

import * as gtag from '../lib/gtag';
import { createData, initializeData, InjectStoreContext, RootStore } from '../store';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

interface Props {
  initialStoreData: RootStore;
}

class MyApp extends App<Props> {
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);

    const initialStoreData = initializeData(createData(appContext));

    return {
      ...appProps,
      initialStoreData,
    };
  }

  render() {
    const { Component, pageProps, initialStoreData } = this.props;

    return (
      <InjectStoreContext initialData={initialStoreData}>
        <Component {...pageProps } />
      </InjectStoreContext>
    );
  }
}

export default MyApp;

// const appGetInitialProps = App.getInitialProps;
//
// App.getInitialProps = async (appContext) => {
//   const appProps = await appGetInitialProps(appContext);
//   const rootStore = createRootStore(appContext.ctx);
//
//   return {
//     ...appProps,
//     rootStore,
//   };
// };

// export default App;
