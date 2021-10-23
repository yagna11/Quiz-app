import React, { useEffect } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const questions = [
  {
    id: 0,
    question: 'In which year did you escape?',
    answers: ['1997', '2013'],
    valueForLA: '2013',
  },
  {
    id: 1,
    question: 'What caused the root of all of the chaos?',
    answers: ['An earthquake', 'World War 3'],
    valueForLA: 'An earthquake',
  },
  {
    id: 2,
    question: 'The president tries to stop an invasion from where??',
    answers: ['Cuba', 'Soviet Union'],
    valueForLA: 'Cuba',
  },
  {
    id: 3,
    question: 'Where was an island converted into a prison?',
    answers: ['LA', 'Manhattan'],
    valueForLA: 'LA',
  },
  {
    id: 4,
    question:
      'Warning.. SPOILER ALERT: At the end of the movie, the main character Snake, does what?',
    answers: [
      'Puffs a cigarette while going into the darkness',
      'Picks a cigarette box labelled “American Spirit”',
    ],
    valueForLA: 'Picks a cigarette box labelled “American Spirit”',
  },
];

export default function Quiz() {
  const [points, setPoints] = React.useState({ LA: 0, NY: 0 });
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [questionInput, setQuestionInput] = React.useState({});

  useEffect(() => {
    const handleQuestionSubmit = () => {
      let LA = 0;
      let NY = 0;

      Object.keys(questionInput).forEach((key) => {
        questionInput[key].value === questionInput[key].valueForLA ? LA++ : NY++;
      });

      setPoints({ LA, NY });
    };

    if (currentQuestion / questions.length === 1) handleQuestionSubmit();
  }, [questionInput, currentQuestion]);

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestion = (question) => {
    return (
      <div>
        <form>
          <h3>{question.question}</h3>

          {question.answers.map((answer, index) => {
            return (
              <div class="radiobtn">
                <label key={index}>
                  <input
                    type="radio"
                    name={question.id}
                    value={answer}
                    checked={questionInput[question.id]?.value === answer}
                    onChange={(e) => {
                      setQuestionInput({
                        ...questionInput,
                        [question.id]: {
                          questionId: question.id,
                          valueForLA: question.valueForLA,
                          value: e.target.value,
                        },
                      });

                      handleNextQuestion(e);
                    }}
                  />
                  {answer}
                </label>
              </div>
            );
          })}
        </form>
      </div>
    );
  };

  return (
    <div>
      <Progress
        percent={(currentQuestion / questions.length) * 100}
        status="success"
        theme={{
          success: {
            symbol: '🏄‍',
            color: 'rgb(223, 105, 180)',
          },
        }}
      />

      {questions[currentQuestion] ? (
        renderQuestion(questions[currentQuestion])
      ) : (
        <>
          <h2>
            Congrats, you are a survivor! You just escaped from{' '}
            {points.LA > points.NY ? 'LA' : 'NY'}!
          </h2>
        </>
      )}
    </div>
  );
}
