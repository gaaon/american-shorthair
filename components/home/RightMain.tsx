import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useStore } from '../../store';
import Content from './content/Content';
import Footer from './content/Footer';

interface Props {
  className?: string;
  onClickLink: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onClickTriggerAnim: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAnimActive: Boolean;
}

const RightMain: React.FC<Props> = ({className, onClickLink, onClickTriggerAnim, isAnimActive}) => {
  const rootStore = useStore();

  return (
    <Col className={className}>
      <Row className={'h-100 flex-column justify-content-center'}>
        <Col className={'d-none d-sm-block flex-grow-0'} style={{minHeight: 24}} />
        <Content internalLinks={rootStore.link.internalLinks} onClickLink={onClickLink} />
        <Footer isAnimActive={isAnimActive} onClickTriggerAnim={onClickTriggerAnim} />
      </Row>
    </Col>
  );
};

export default RightMain;
