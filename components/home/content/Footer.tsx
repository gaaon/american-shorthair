import React from 'react';
import Col from 'react-bootstrap/Col';

interface Props {
  isAnimActive: Boolean;
  onClickTriggerAnim: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Footer: React.FC<Props> = ({isAnimActive, onClickTriggerAnim}) => (
  <Col className={'flex-grow-0'}>
    <div className={'form-check form-check-inline'}>
      <label className={'form-check-label'} htmlFor={'anim-active'}> 애니메이션 끄기 </label>
      <input className={'form-check-input ml-2'}
             type={'checkbox'}
             id={'anim-active'}
             checked={!isAnimActive}
             onChange={onClickTriggerAnim} />
    </div>
  </Col>
);

export default Footer;