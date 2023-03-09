import React, { FC } from 'react';
import { REWARDS } from '../../../../contants';
import { convertToUSD, cx } from '../../../../utils';
import './styles.css';

interface RewardsProps {
  currentReward: number;
}

const Rewards: FC<RewardsProps> = ({ currentReward }) => {
  const getAditionalClassName = (reward: number, current: number) => {
    if (current === reward) {
      return 'current-reward';
    }
    if (current > reward) {
      return 'less-reward';
    }
    return '';
  };

  return (
    <div className="rewards__container">
      {REWARDS.sort((a, b) => b - a).map((reward, index) => (
        <div className="rewards-wrapper" key={index}>
          <div className={cx('rewards-item__left-line', getAditionalClassName(reward, currentReward))} />
          <div className={cx('rewards-item__item', getAditionalClassName(reward, currentReward))}>{convertToUSD(reward)}</div>
          <div className={cx('rewards-item__right-line', getAditionalClassName(reward, currentReward))} />
        </div>
      ))}
    </div>
  );
};

export default Rewards;
