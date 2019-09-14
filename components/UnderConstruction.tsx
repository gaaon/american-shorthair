import React from 'react';
import Link from 'next/link';

import styles from './UnderConstruction.scss';

const UnderConstruction = () => (
  <div className={'d-inline-block'}>
    <h1 className={'display-3 text-center'}> 공사중 </h1>
    <div className={'text-center mb-3'}>
      <Link href={'/'}> 홈으로 </Link>
    </div>
    <img src={'/static/img/under_construction.png'} alt={'공사중'} className={styles.image} />
  </div>
);

export default UnderConstruction;