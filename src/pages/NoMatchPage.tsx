import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage: FC = () => (
  <div>
    <h2>Nothing to see here!</h2>
    <p>
      <Link to="/game-millionaire">Go to the home page</Link>
    </p>
  </div>
);

export default NoMatchPage;
