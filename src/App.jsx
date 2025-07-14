// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GamePage" element={<GamePage />} />
      <Route path="ResultPage" element={<ResultPage/>}/>
    </Routes>
  );
}

export default App;
