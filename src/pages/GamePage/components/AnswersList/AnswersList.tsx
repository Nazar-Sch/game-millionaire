import React, { FC, useEffect, useState } from 'react';
import { FIELDS_NAMES, HANDLE_CLASSNAME_DELAY } from '../../../../contants';
import useTimeout from '../../../../hooks/useTimeout';
import { cx } from '../../../../utils';
import { IAnswer, TClassNames } from '../../../../contants/types';
import './styles.css';

interface AnswersListProps {
  answers: IAnswer[];
  handleQuestion: (correct: boolean) => void;
}

const AnswersList: FC<AnswersListProps> = ({ answers, handleQuestion }) => {
  const [className, setClassName] = useState<TClassNames>('');
  const [selectedIndex, setSelectedIndex] = useState<string>('');
  const { setTimer } = useTimeout();

  useEffect(() => {
    setClassName('');
    setSelectedIndex('');
  }, [answers]);

  const handleSelectAnswer = (correct: boolean, idx: string) => {
    setClassName('selected');
    setSelectedIndex(idx);

    setTimer(HANDLE_CLASSNAME_DELAY, () => {
      if (correct) {
        setClassName('correct');
        return;
      }
      setClassName('wrong');
    });

    handleQuestion(correct);
  };

  return (
    <div className="answers-container">
      {answers.map((answer, idx) => (
        <div key={idx} className="answer-btn__wrapper">
          <div className={cx('answer-btn__left-line', selectedIndex === FIELDS_NAMES[idx] ? className : '')} />
          <button
            type="button"
            className={cx('answer-btn__item', selectedIndex === FIELDS_NAMES[idx] ? className : '')}
            onClick={() => !selectedIndex && handleSelectAnswer(answer.correct, FIELDS_NAMES[idx])}
          >
            <span className="answer-btn__index">{FIELDS_NAMES[idx]}</span>
            {answer.text}
          </button>
          <div className={cx('answer-btn__right-line', selectedIndex === FIELDS_NAMES[idx] ? className : '')} />
        </div>
      ))}
    </div>
  );
};

export default AnswersList;
