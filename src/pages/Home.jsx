import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const goToGamePage = () => {
    if(category){
      navigate(`/GamePage?category=${category}&difficulty=${difficulty}`);
    }else{
      navigate(`/GamePage?difficulty=${difficulty}`);
    }
  }

  return (
    <main>
      <Header/>
      <div className='wrapper'>
        <div className='content'>
          <section className='game-card'>
            <button className='start-button' onClick={goToGamePage}>Start</button>
            <div className='options'>
              <div className='selector'>
              <label htmlFor='category'>Category:</label>
              <select id='category' className='dropdown' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='random'>Random</option>
                <option value='general_knowledge'>General Knowledge</option>
                <option value='geography'>Geography</option>
                <option value='music'>Music</option>
                <option value='science'>Science</option>
                <option value='sport_and_leisure'>Sport & Leisure</option>
              </select>
              </div>
              <div className='selector'>
              <label htmlFor='difficulty'>Difficulty:</label>
              <select id='difficulty' className='dropdown' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

  )
}

export default Home