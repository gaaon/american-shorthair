import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { LinkItem } from '../../types';

import styles from './RightMain.scss';

interface Props {
  className?: string;
  onClickLink: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onClickTriggerAnim: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAnimActive: boolean;
}

const RightMain: React.FC<Props> = ({className, onClickLink, onClickTriggerAnim, isAnimActive}) => {
  const linkItems: Array<LinkItem> = [
    {link: '/intro', label: '소개', icon: 'far fa-smile-wink'},
    {link: '/service', label: '서비스', icon: 'far fa-lightbulb'},
    {link: '/laboratory', label: '실험실', icon: 'fas fa-flask'},
  ];

  console.log(onClickTriggerAnim);
  console.log(isAnimActive);
  return (
    <Col className={className}>
      <Row className={'h-100 flex-column justify-content-center'}>
        <Col style={{paddingTop: 24}}>
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
          <div className={'form-check form-check-inline'}>
            <label className={'form-check-label'} htmlFor={'anim-active'}> 애니메이션 </label>
            <input className={'form-check-input ml-2'}
                   type={'checkbox'}
                   id={'anim-active'}
                   checked={isAnimActive}
                   onChange={(_) => console.log('ho')}
                   // onChange={(e) => {
                   //   console.log('hello');
                   //   onClickTriggerAnim(e);
                   // }}
            />
          </div>
        </Col>
      </Row>
    </Col>
  )
};

export default RightMain;
