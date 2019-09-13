import React, {FunctionComponent} from 'react';

const Base: FunctionComponent<{}> = ({children}) => (
  <div className={'d-flex flex-column min-h-100 h-100'} style={{overflowX: 'hidden'}}>
    <style jsx={true} global={true}>{`
      html, body, #__next {
        height: 100%;
      }
      * {
        font-family: Roboto, 'Nanum Gothic', apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
      }
      
      h1, h2, h3, h4, h5 {
        font-weight: bold;
      }
      
      .min-h-100 {
        min-height: 100%;
      }
      
      .text-l-muted {
        
      }
      `}</style>

    {children}
  </div>
);

export default Base;
