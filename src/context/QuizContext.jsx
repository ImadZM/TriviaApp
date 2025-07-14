import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(20);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <QuizContext.Provider value={{
      score, setScore,
      total, setTotal,
      category, setCategory,
      difficulty, setDifficulty
    }}>
      {children}
    </QuizContext.Provider>
  );
};
