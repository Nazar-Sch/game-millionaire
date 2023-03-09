import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HANDLE_QUESTION_DELAY } from '../../contants';
import questions from '../../questions.json';
import useTimeout from '../../hooks/useTimeout';
import AnswersList from './components/AnswersList/AnswersList';
import Rewards from './components/Rewards/Rewards';
import useShowSidebar from '../../hooks/useResizeScreen';
import './styles.css';
import { getRandomQuestions } from '../../utils';

const Game: FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const { isResizedScreen, setIsResizedScreen } = useShowSidebar();
  const navigate = useNavigate();
  const { answers, question, reward } = getRandomQuestions(questions)[questionIndex];
  const lastQuestion = questionIndex === questions.length - 1;
  const { setTimer } = useTimeout();

  const handleQuestion = (correct: boolean) => {
    setTimer(HANDLE_QUESTION_DELAY, () => {
      if (!correct || lastQuestion) {
        navigate('/gameover', { state: { reward, win: lastQuestion } });
        return;
      }
      setQuestionIndex((prev) => prev + 1);
    });
  };

  const handleBurgerClick = () => {
    setIsResizedScreen((prev) => !prev);
  };

  return (
    <div className='game__container'>
      <button className='game__burger-btn' onClick={handleBurgerClick}>
        <img src={isResizedScreen ? '/close.svg' : '/burger.svg'} alt='Open/Close rewards button' />
      </button>
      <div className='game__wrapper'>
        <h4 className='game__question'>{question}</h4>
        <AnswersList answers={answers} handleQuestion={handleQuestion} />
      </div>
      {isResizedScreen && <Rewards currentReward={reward} />}
    </div>
  );
};

export default Game;
