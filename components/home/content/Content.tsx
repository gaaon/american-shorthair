import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../RightMain.scss';
import { LinkItem } from '../../../types';

interface ContentProps {
  internalLinks: Array<LinkItem>;
  onClickLink: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Content: React.FC<ContentProps> = ({internalLinks, onClickLink}) => (
  <Col>
    <Row className={'h-100 flex-column justify-content-sm-center justify-content-top'}>
      <Col className={'flex-grow-0'}>
        <ul className={styles.menuList}>
          {
            internalLinks.map((linkItem, idx) => (
              <li key={idx} className={'mt-4'}>
                <a href={linkItem.link} onClick={onClickLink} className={styles.menuItem}>
                  <p className={'h3'}>
                    <span className={'d-inline-block text-center'} style={{minWidth: 40}}>
                      <i className={`${linkItem.icon || ''} fa-md`} aria-hidden="true" />
                    </span>
                    <span style={{letterSpacing: '.2em'}}>
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
);

export default Content;