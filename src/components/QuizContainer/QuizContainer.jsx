import React from 'react';
import Quiz from '../Quiz/Quiz';
import './QuizContainer.scss';

export default function QuizContainer() {
  const [quizState, setQuizState] = React.useState('not-start');

  const handleQuizStart = () => {
    setQuizState('start');
  };

  return (
    <div className="QuizContainer">
      {quizState === 'not-start' ? (
        <button className="submit-feedback" onClick={handleQuizStart}>
          Start Quiz
        </button>
      ) : (
        <Quiz />
      )}
    </div>
  );
}
