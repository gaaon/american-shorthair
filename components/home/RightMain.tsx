import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { LinkItem } from '../../types';

import styles from './RightMain.scss';

interface Props {
  className?: string;
  onClickLink: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const RightMain: React.FC<Props> = ({className, onClickLink}) => {
  const linkItems: Array<LinkItem> = [
    {link: '/intro', label: '소개', icon: 'far fa-smile-wink'},
    {link: '/service', label: '서비스', icon: 'far fa-lightbulb'},
    {link: '/laboratory', label: '실험실', icon: 'fas fa-flask'},
  ];

  return (
    <Col className={className}>
      <Row className={'h-100 flex-column justify-content-center'}>
        <Col>
          <Row className={'h-100 flex-column justify-content-center'}>
            <Col className={'flex-grow-0'}>
              <ul className={styles.menuList}>
                {
                  linkItems.map((linkItem, idx) => (
                    <li key={idx} className={'mt-4'}>
                      <a href={linkItem.link} onClick={onClickLink} className={styles.menuItem}>
                        <p className={'h3'}>
                          <span className={'d-inline-block text-center'} style={{minWidth: 40}}>
                            <i className={`${linkItem.icon || ''} fa-md`} />
                          </span>
                          {linkItem.label}
                        </p>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className={'flex-grow-0'}>
          애니메이션 끄기
        </Col>
      </Row>
    </Col>
  )
};

export default RightMain;
