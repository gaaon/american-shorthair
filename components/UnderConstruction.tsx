import React from 'react';

import Link from 'next/link';

import styles from './UnderConstruction.scss';

interface Props {
  content: string;
}

const UnderConstruction: React.FC<Props> = ({content}) => (
  <div className={'d-flex flex-column align-items-center'}>
    <h2> {content} </h2>
    <div className={'mb-3'}>
      <Link href={'/'}>
        <a> 홈으로 </a>
      </Link>
    </div>
    <img src={'/static/img/under_construction.png'} alt={content} className={styles.image} />
  </div>
);

export default UnderConstruction;
