import { FC } from 'react';
import StyledLink from '../../components/StyledLink';
import { cx } from '../../utils';
import './styles.css';

const StartPage: FC = () => {
  return (
    <div className={cx('custom-page-container', 'start-container')}>
      <img src='/finger.png' alt="Millionaire's finger" className='custom-image' />
      <h2 className='custom-heading'>Who wants to be a milliomaire?</h2>
      <StyledLink className='custom-button' to='/game'>
        Start
      </StyledLink>
    </div>
  );
};

export default StartPage;
