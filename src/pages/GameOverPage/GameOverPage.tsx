import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import StyledLink from '../../components/StyledLink/StyledLink';
import { convertToUSD } from '../../utils';

const GameOver: FC = () => {
  const {
    state: { reward },
  } = useLocation();

  return (
    <div className="custom-page-container">
      <img src="/finger.png" alt="Millionaire's finger" className="custom-image" />
      <p className="custom-sub-heading">Total score:</p>
      <h2 className="custom-heading">
        {convertToUSD(reward)}
        {' '}
        earned
      </h2>
      <StyledLink to="/" className="custom-button">
        Try again
      </StyledLink>
    </div>
  );
};

export default GameOver;
