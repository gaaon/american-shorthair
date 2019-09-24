import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LinkItem } from '../../../types';

import styles from '../RightMain.module.scss';

interface ContentProps {
  internalLinks: Array<LinkItem>;
  onClickLink: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Content: React.FC<ContentProps> = ({internalLinks, onClickLink}) => {
  const [showIcon, setShowIcon] = useState(false);
  const [iconColor] = useState('inherit');

  useEffect(() => {
    setTimeout(() => setShowIcon(true), 0);
  }, []);

  // useEffect(() => {
  //   const colorBanana = '#ffc107';
  //
  //   const timer = setTimeout(
  //     () => setIconColor(iconColor === 'inherit' ? colorBanana : 'inherit'),
  //     2000);
  //
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [iconColor]);

  return (
    <Col>
      <Row className={'h-100 flex-column justify-content-sm-center justify-content-top'}>
        <Col className={'flex-grow-0'}>
          <ul className={styles.menuList}>
            {
              internalLinks.map((linkItem, idx) => (
                <li key={idx} className={'mt-4'}>
                    <p className={'h3'}>
                      <a href={linkItem.link} onClick={onClickLink} className={styles.menuItem}>

                        <span className={'d-inline-block text-center'} style={{minWidth: 50}}>
                          {showIcon && <FontAwesomeIcon icon={linkItem.icon!} style={{color: iconColor}}/>}
                        </span>

                        <span style={{letterSpacing: '.1em'}}>
                          {linkItem.label}
                        </span>
                      </a>
                    </p>
                </li>
              ))
            }
          </ul>
        </Col>
      </Row>
    </Col>
  );
};

export default Content;