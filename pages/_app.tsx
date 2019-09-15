import React from 'react';
import App, { AppContext } from 'next/app';
import Router from 'next/router';

import * as gtag from '../lib/gtag';
// import { createRootStore } from './store';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class MyApp extends App {
  static async getInitialProps(appContext: AppContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log(props, state);
    return state;
  }


  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps } />;
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
