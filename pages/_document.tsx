import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag';
import {useStaticRendering} from 'mobx-react';

if (!process.browser) {
  useStaticRendering(true);
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto&display=swap" />
          <link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/nanumgothic.css"/>

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
          <script src={`https://kit.fontawesome.com/96227faa19.js`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');`
            }}
          />

          <script dangerouslySetInnerHTML={{
            __html: `
            CSS.paintWorklet.addModule('/static/js/day-night-switch-paint.js');
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
