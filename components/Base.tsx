import React from 'react';

const Base: React.FC<{}> = ({children}) => (
  <div className={'d-flex flex-column min-h-100 h-100'} style={{overflowX: 'hidden'}}>
    {children}
  </div>
);

export default Base;
