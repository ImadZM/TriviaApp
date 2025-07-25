import React, { useEffect, useState } from 'react'
import AnswerCard from '../components/AnswerCard';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const GamePage = () => {
  //Initalizing all the states
  const [question, setQuestion] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [usedIndices, setUsedIndices] = useState([]);
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);



  //Getting category and difficulty from Home.jsx
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || 'random';
  const difficulty = queryParams.get('difficulty') || 'easy';

  //routing to Resultpage.jsx
  const navigate = useNavigate();
  const goToResults = () => {
    navigate('/ResultPage', {
      state: {
        score,
        total: questions.length,
        category,
        difficulty
      }
    });
  }



  //Fetching questions from Trivia API and storing them
  const fetchQuestion = async () => {
    try {
      let response;
      const baseUrl = 'https://the-trivia-api.com/v2/questions'

      const url = category === 'random' ?
        `${baseUrl}?limit=20&difficulties=${difficulty}` :
        `${baseUrl}?limit=20&categories=${category}&difficulties=${difficulty}`
      response = await fetch(url);

      const data = await response.json();

      const formatted = data.map((item) => {
        const allChoices = [...item.incorrectAnswers, item.correctAnswer];
        // Shuffle choices
        const shuffled = allChoices.sort(() => Math.random() - 0.5);

        return {
          question: item.question.text,
          choices: shuffled,
          answer: item.correctAnswer
        };
      });

      setQuestions(formatted);

      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentIndex(randomIndex);
      setQuestion(formatted[randomIndex]);
      setUsedIndices([randomIndex]);


    } catch (error) {
      console.error(`Error fetching questions ${error}`)
    }

  }


  //load a new question
  const loadNewQuestion = () => {
    if (usedIndices.length === questions.length) {
      setCurrentIndex(0);
      setFinished(true);
      return;
    }
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedIndices.includes(randomIndex))

    setQuestionNumber(questionNumber + 1);
    setCurrentIndex(randomIndex);
    setQuestion(questions[randomIndex]);
    setUsedIndices(prev => [...prev, randomIndex]);
  }


  //Handling answer selection
  const handleAnswerClick = async (choice) => {
    if (selected) { return; }
    setSelected(true);
    if (choice === question.answer) {
      setCorrect(true);
      setScore(score => (score + 1))
    } else {
      setCorrect(false);
    }

    setTimeout(() => {
      setSelected(false);
      loadNewQuestion();
    }, 1000)

  }

  //UseEffect to fetch questions when page loads
  useEffect(() => {
    fetchQuestion()
  }, [])

  //UseEffect to go to result page when all questions finish
  useEffect(() => {
    if (finished) {
      goToResults();
    }
  }, [finished])


  //Page contents
  return (
    <main>
      <Header
        score={score}
        total={questions.length}
        category={category}
        difficulty={difficulty}
      />
      <div className='wrapper'>

        {question
          ? (<section className='quiz'>
            <div className='question'>
              <h2>{questionNumber}. {question.question}</h2>
            </div>
            <div className='answer-box'>
              <ul>
                {question.choices.map((choice, index) => (
                  <AnswerCard
                    key={index}
                    choice={choice}
                    correct={question.answer}
                    selected={selected}
                    onClick={() => handleAnswerClick(choice)}
                  />
                ))}
              </ul>
            </div>
            <div className='result'>
              {
                !selected ? (<></>)
                  : (selected && correct
                    ? (
                      <h2>Correct -</h2>
                    )
                    : (
                      <h2>Incorrect -</h2>
                    )
                  )}
              <h2>Score: {score}</h2>
            </div>
          </section>
          )
          : (<Loader />)
        }


      </div>
    </main>
  )
}

export default GamePage