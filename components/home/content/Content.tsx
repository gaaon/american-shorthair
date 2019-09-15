import React, {useEffect, useState} from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from '../RightMain.scss';
import {LinkItem} from '../../../types';

interface ContentProps {
  internalLinks: Array<LinkItem>;
  onClickLink: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Content: React.FC<ContentProps> = ({internalLinks, onClickLink}) => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowIcon(true), 0);
  }, []);

  return (
    <Col>
      <Row className={'h-100 flex-column justify-content-sm-center justify-content-top'}>
        <Col className={'flex-grow-0'}>
          <ul className={styles.menuList}>
            {
              internalLinks.map((linkItem, idx) => (
                <li key={idx} className={'mt-4'}>
                  <a href={linkItem.link} onClick={onClickLink} className={styles.menuItem}>
                    <p className={'h3'}>
                      <span className={'d-inline-block text-center'} style={{minWidth: 50}}>
                        {showIcon && <FontAwesomeIcon icon={linkItem.icon!}/>}
                      </span>

                      <span style={{letterSpacing: '.1em'}}>
                      {linkItem.label}
                    </span>
                    </p>
                  </a>
                </li>
              ))
            }
          </ul>
        </Col>
      </Row>
    </Col>
  )
};

export default Content;